require ('../src/db/mongoose')

const Task = require('../src/models/task')
Task.findByIdAndDelete('5cd5bd0a98ce37045fd634a3').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result2)=>{
    console.log("count",result2)
}).catch((e)=>{console.log(e)})