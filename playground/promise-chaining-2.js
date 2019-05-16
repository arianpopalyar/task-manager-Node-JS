require ('../src/db/mongoose')

 const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cd5bd0a98ce37045fd634a3').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result2)=>{
//     console.log("count",result2)
// }).catch((e)=>{console.log(e)})

const deletingFunction = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deletingFunction('5cdadd00f6e0c21dddcd31da').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})