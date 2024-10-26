import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const coupleDetails = mongoose.Schema({
    name:String,
    loversName:String
})
const User =  mongoose.model("Couple",coupleDetails);
export default User;