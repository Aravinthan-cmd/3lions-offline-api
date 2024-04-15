import mongoose from 'mongoose';
const Btn = new mongoose.Schema({
    value:{
        type:String
    }
},{timestamps:true})
export default mongoose.model("Btn", Btn);