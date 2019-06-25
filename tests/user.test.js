const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    name:'Mike',
    email:'mike@example.com',
    password:'56what**',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

beforeEach(async ()=>{
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name:'Andrew2',
        Email:'andrew2@example.com',
        password:'2Mypass77!!'
    }).expect(201)

    //Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body.user.name).toMatchObject({
        user:{
            name:'Mike',
        email:'mike@example.com'
        },
        token: user.tokens[0].token
    })
    expect(luser.password).not.toBe('56what**')
})


test('Should login existing user', async () =>{
    const response = await request(app).post('/users/login').send({
        email:'userOne.email',
        password:'userOne.password'
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.token[1].token)
})

test('non-existing user should not login', async () =>{
    await request(app).post('/users/login').send({
        email:'test@example.com',
        password:'123dfd**'
    }).expect(400)
})

test('Should get profile for user', async()=>{
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not get profile for unauthenticalted user', async ()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('should delete account for user',async ()=>{
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('should not delete account for unauthenticated user', async ()=>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should apload avatar image', async()=> {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user fielfs', async()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name:'Jess'
        })
        .expect(200)
        const user = await User.findById(userOneId)
        expect(user.name).toEqual('Jess')
})

test('Should not update invalid fields', async()=> {
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.Tokens[0].token}`)
    .send({
        location: 'Phildephia'
    })
    expect(400)
})