import React from "react";
import pic1 from "./img1.webp";
import pic2 from "./img1.jpg";
import pic3 from "./img2.jpg";
import pic4 from "./img3.jpg";
import pic5 from "./img4.jpg";
import pic6 from "./chef1.jpg";
import pic7 from "./chef2.jpg";
import pic8 from "./chef3.jpg";
import pic9 from "./chef4.jpg";
import Footer from '../components/pages/Footer/footer'
import { Hidden } from "@mui/material";
const About = () =>
{
    return (
        <div style={{overflow:"hidden"}}>             
            <div style={{ backgroundImage: `url(${pic1})`,width:'1800px', height:"300px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.9"}}>
                <h1 style={{paddingTop:"100px",color:"white",fontSize:"50px"}}><i style={{font:"12px"}}>  EAT GOOD</i> <br/> <i>FEEL GOOD </i></h1></div>
        <div style={{backgroundColor:"white" ,width:'1500px', height:"600px"}}>
            <div style={{width:'700px', height:"600px",float:"left"}} >
                <div style={{width:'350px',height:"300px"}}>
                <div style={{float:"left",paddingTop:"30px",paddingLeft:"70px"}}><img style ={{width:"250px",height:"300px",position:"absolute"}} src ={pic2}/></div>
                <div style={{float:"right",paddingTop:"120px",position:"relative"}}><img style ={{width:"250px",height:"200px",position:"absolute"}} src ={pic3}/></div>
                </div>
                <div style={{width:'350px',height:"300px"}}>
                <div style={{float:"left",paddingTop:"50px",paddingLeft:"80px",paddingRight:"200px"}}><img style ={{width:"250px",height:"200px",position:"absolute"}}src ={pic4}/></div>
                <div style={{float:"right",paddingLeft:"30px",paddingTop:"40px"}}><img  style ={{width:"300px",height:"300px",position:"absolute"}} src ={pic5}/></div>
                </div>      
            </div>
        <div style={{width:'700px', height:"600px",float:"left"}} >
            <center><h1 style={{paddingTop:"100px",fontSize:"50px"}}>Welcome to restortan </h1></center>
            <br/>
            
A restaurant is a place where you can eat a meal and pay for it. In restaurants,<br/> your food is usually served to you at your table by a waiter or waitress.<br/> The restaurant serves breakfast, lunch, and dinner.<br/> The food at the restaurant was good and the waiters were polite.<br/>
<br/>
<br/>
            
        <buttton style={{color:"white",backgroundColor:"orange",fontSize:"20px",padding:"4px 7px",border:"3px solid black",borderRadius:"50px"}} >Readmore</buttton>
        </div>   
        </div>
        <div style={{width:'1500px', height:"50px"}} ></div>
        <div style={{width:'1500px', height:"100px"}} >
            <center><h2 style={{color:"orange",fontFamily:"initial"}}> -- Team members -- </h2>
            <h1>Our Master Chefs</h1>
            </center>
        </div>
        <div style={{height:"500px",width:"1500px"}}>
            <div style={{width:"250px",height:"350px",paddingLeft:"50px",marginLeft:"55px",float:"left",backgroundColor:"whitesmoke"}}><img style ={{width:"200px",height:"200px",borderRadius:"50%",marginTop:"10px",marginRight:"50%"}} src ={pic9}/>
            <h3>Sanjeev Kapoor</h3>
            <h5>Executive chef</h5></div>
            <div style={{width:"250px",height:"350px",paddingLeft:"50px",marginLeft:"55px",float:"left",backgroundColor:"whitesmoke"}}><img style ={{width:"200px",height:"200px",borderRadius:"50%",marginTop:"10px",marginRight:"50%"}} src ={pic6}/> <h3>Vikas Khanna</h3>
            <h5>Indain chef</h5></div>
            <div style={{width:"250px",height:"350px",paddingLeft:"50px",marginLeft:"55px",float:"left",backgroundColor:"whitesmoke"}}><img style ={{width:"200px",height:"200px",borderRadius:"50%",marginTop:"10px",marginRight:"50%"}} src ={pic7}/> <h3>Ranveer Brar</h3>
            <h5>Master chef</h5></div>
            <div style={{width:"250px",height:"350px",paddingLeft:"50px",marginLeft:"55px",float:"left",backgroundColor:"whitesmoke"}}><img style ={{width:"200px",height:"200px",borderRadius:"50%",marginTop:"10px",marginRight:"50%"}} src ={pic8}/> <h3>Ritu Dalmia</h3>
            <h5>Italian chef</h5></div>

        </div>
        <Footer/>
        </div>
      );
}
export default About