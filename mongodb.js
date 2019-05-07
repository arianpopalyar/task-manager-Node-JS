//CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id:id,
        name:'jack',
        age:2
    }, (error, result) =>{
        if(error){
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Hover the house',
    //         completed:true
    //     },{
    //         description:'give jasmine shower',
    //         completed:false
    //     },
    //     {
    //         description:'pay the council tax',
    //         completed:true
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert the documents')
    //     }
    //     console.log(result.ops)
    // })
})