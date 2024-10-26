import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/coupleDetails");

const coupleDetails = mongoose.Schema({
    name:String,
    loversName:String
})
const User =  mongoose.model("Couple",coupleDetails);
export default User;