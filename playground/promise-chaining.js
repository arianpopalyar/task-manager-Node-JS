require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5cdad8accf8a6d1d55c956b9', { agr:1 }).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})                                          