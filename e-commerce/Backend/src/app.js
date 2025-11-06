import express from 'express'
import userRouter from './routes/user.router.js'
import productRouter from "./routes/product.router.js"
import morgan from 'morgan'
import path from "path"
import { fileURLToPath } from 'url'
import { configDotenv } from 'dotenv'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
configDotenv()


const app = express()

app.use((req, res, next)=>{
    console.log("application level middleware");
    next()
})

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "../public/css")))


app.use("/user",userRouter)
app.use("/product", productRouter)

export default app