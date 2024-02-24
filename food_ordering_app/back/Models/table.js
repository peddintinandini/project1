import mongoose from "mongoose";
const Schema = mongoose.Schema;
let tableSchema = new Schema([{
    table_num:{
        type:String,
        required:true,
    } ,
    array:{
        type:Array,
        required:true,
    }
}])
export default mongoose.model("table",tableSchema);