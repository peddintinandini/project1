import mongoose from "mongoose";
const Schema = mongoose.Schema
let ConSchema = new Schema({
    username:{
        type: String,
        // required:true
    },
    email: {
        type: String,
        // required:true
    },
    sub: {
        type: String,
        // required:true
    },    
    msg: {
        type: String,
    }
});
export default mongoose.model("contact",ConSchema);