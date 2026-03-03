import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async ()=>{
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error("Error: MONGODB_URI is not defined in environment variables");
        process.exit(1);
    }
    await mongoose.connect(mongoUri).then(()=>
        console.log("DB connected")).catch(err => console.error("DB connection error:", err));
    
}
