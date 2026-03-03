import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/routeRoute.js"

import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config

const app = express()
const port = process.env.PORT || 1000

// middleware
app.use(express.json())

// CORS configuration - allow all origins for production
app.use(cors({
    origin: true,  // Allow all origins in production
    credentials: true
}))

// db connection
connectDB();

//api endpoint bro
app.use("/api/food",foodRouter)
app.use('/images', express.static('uploads'));
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
// mongodb+srv://khiladi0024:Charanwebdev11@cluster0.zmiu52n.mongodb.net/?