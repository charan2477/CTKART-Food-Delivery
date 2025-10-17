import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://khiladi0024:Charanwebdev11@cluster0.zmiu52n.mongodb.net/Delivery_food').then(()=>
        console.log("DB connected"));
    
}