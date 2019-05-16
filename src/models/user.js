const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
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
        minlength:7,
        validate(value){    
          if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain password')
            }
        }
    }
})

module.exports = User