import mongoose from "mongoose";
const Schema = mongoose.Schema;
let formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
});
export default mongoose.model("Form",formSchema);