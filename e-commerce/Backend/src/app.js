import express from 'express'
import userRouter from './routes/user.router.js'
import morgan from 'morgan'


const app = express()

app.use((req, res, next)=>{
    console.log("application level middleware");
    next()
})

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/user",userRouter)

export default app