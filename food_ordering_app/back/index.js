import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from "mongoose";
import Conschema from "./conschema";
import Form from "./Models/form";
import multer from "multer";
import table from "./Models/table";
import Reviewschema from './review'
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/images',express.static('public/images'))
mongoose.connect('mongodb+srv://Alekhya:qBc32LfhdcAzI4Rc@cluster0.ptbqzbv.mongodb.net/Restaurant?retryWrites=true&w=majority')
// mongodb+srv://admin:ExHvw3rOdOwCLi9B@cluster0.2h0anqu.mongodb.net/Restaurant?retryWrites=true&w=majority
.then(()=>
    console.log("Connected to database & listening to localhost 3333"))
    .catch((err)=> console.log(err));
    const storage = multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, 'public/images')
        },
        filename: function (req, file, callback) {
          // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          callback(null, Date.now()+"_"+file.originalname)
        }
      })
    
    const upload = multer({ storage: storage })
    app.post('/addform',upload.single("img"),async(req,res,next)=>{
        console.log(req.body)
        const img =(req.file)? req.file.filename :null
        const{name,price,rating,text} = req.body;
        const Formm = new Form({
            name,
            img,
            price,
            rating,
            text
        })
        // app.post('/addform',(req,res,next)=>{
        //     console.log(req.body)
        // })
        // // try{
            Formm.save()
        });
     app.get('/getform',async(req,res,next)=>{
        let formdata
        try{
           formdata = await Form.find()
        }
        catch(err){
           console.log(err)
        }
        if(!formdata){
           console.log("no data found")
        }
        // res.send("success")
        return res.status(200).json({formdata})
     
      })
      app.post('/addtable',async(req,res,next)=>{
        const {table_num,array} = req.body;
        const tablee = new table({
          table_num,
          array
         
      })
        tablee.save();
      })
    app.post('/addform',(req,res,next)=>{
        const {username,email,sub,msg} = req.body;
        console.log(username,email,sub,msg)
        const form1 = new Conschema({
            username,
            email,  
            sub,
            msg
        })
        try{
        form1.save()
        }
        catch(err){
            console.log(err);
        }
        return res.send({form1})
    })
    app.post('/addreview',(req,res,next)=>{
        const {fname,lname,email,number,day,msg} = req.body.redata;
        const re = new Reviewschema({
            fname,
            lname,
            email,
            number,
            day,
            msg
        })
        try{
            re.save()
            return res.send({msg:"inserted",result:re})
        }
        catch(err){
            console.log(err)
        }
    })








app.listen(3333,()=>{
    console.log('port : 3333')
})