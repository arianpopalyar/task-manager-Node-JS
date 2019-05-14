const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    userNewUrlParser:true,
    useCreateIndex:true
})

const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        validate(value){
        if(value < 0){
          throw new Error('Age can not be less then 1')
        }
        }
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Emai is invalid')
            }
        }
    },
    password:{
        require:true,
        type:String,
        trim:true,
        minLength:7,
        validate(value){    
          if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain password')
            }
        }
    }
})

const saveUser = new User({
    name:'Joker',
    age:0,
    email:'arian@test.com',
    password:'whatever334%' 
})

saveUser.save().then(()=>{
    console.log(saveUser)
}).catch((error)=>{
    console.log(error)
})