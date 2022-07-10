import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/user.js"

const app = express()

app.use(bodyParser.json())

//api
app.use('/api', userRouter)





app.listen(3000, function(){
    console.log('hey server is running on th e port 3000')
})