const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled ')
//     }else{
//         next()
//     }
  
// })


//code for under maintinance
app.use((req, res, next) =>{
    res.status(503).send('site is under maintinance')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port '+ port)
})

//const bcrypt = require('bcryptjs')
//esample code for
const jwt = require('jsonwebtoken')
const myFunction = async ()=>{
   const token = jwt.sign({_id:'abc123'}, 'thisismycourse',{expiresIn:'7 days'})
   console.log(token)

   const data = jwt.verify(token, 'thisismycourse')
   console.log(data)
}
myFunction()