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

db.collection('tasks').deleteMany({
    age:70
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
   
db.collection('tasks').deleteOne({
    description:'Hover the house'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
})