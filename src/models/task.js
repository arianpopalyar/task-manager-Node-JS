const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
        description:{
            type: 'String',
            require: true,
            trim: true
        },
        completed:{
            type: Boolean,
            default: false
        }
    })
taskSchema.pre('save', async function(next){
    const task = this
    
    next()
})
const Task = mongoose.model('Tasks',taskSchema)

module.exports = Task