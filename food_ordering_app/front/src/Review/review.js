import React, { useState } from 'react';
import pic from '../images/i2.jpg';
import styled from 'styled-components';
import axios from "axios";
import Switches from './switches';

const Feed = styled.div`
    label{
      color:orange;
      font-size:17px;
      font-family:cursive;
      font-weight:20px;
    }
    input{
      height:10px;
      width:250px;
      padding:10px;
      margin:10px;
      border-radius:4px;
    }
    textarea{
      height:150px;
      width:500px;
      border-radius: 5px;
    }
    `
const Hstyle = styled.div`
    h3{
      color:orange;
      font-family:cursive;
      margin-left:300px;
      text-align:left;
    }
    `

function Review() {
  const bgimg = {
    backgroundImage:`url(${pic})`,
    height:"1200px",
    width:"100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  } 
  const [redata,setData] = useState({
    fname:'',
    lname:'',
    email:'',
    number:'',
    day:'',
    msg:''
  })
  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(redata)
    axios.post('http://localhost:3333/addreview',{redata})
    alert("Review Sent")
  }
  return (
    <div>
      <div style={bgimg}>
        <div style={{height:"40px"}}></div>
        <form style={{Align:"left"}} onSubmit={handlesubmit}>
          <br/>
          <h2 style={{color:"aqua",fontFamily:"cursive"}}>We Appreciate your Feedback &#128512;</h2>
          <div style={{height:"180px"}}>
            <Feed>
              <label>Name :</label>
              <input type="text" placeholder="first name" onChange={(e)=>setData({...redata,fname:e.target.value})}/>
              <input type="text" placeholder="last name" onChange={(e)=>setData({...redata,lname:e.target.value})}/><br/>
              <label>Email :</label>
              <input type="email"  onChange={(e)=>setData({...redata,email:e.target.value})}/>&emsp;
              <label>Phone Number :</label>
              <input type="tel"  onChange={(e)=>setData({...redata,number:e.target.value})}/><br/>
              <label>Day Visited :</label>
              <input type="date"  onChange={(e)=>setData({...redata,day:e.target.value})}/><br/>
            </Feed>
          </div>
          <div>
            <Hstyle>
              <h3>Food Quality :</h3>
              <Switches/>
              <h3>Service Quality :</h3>
              <Switches/>
              <h3>Cleanliness :</h3>
              <Switches/>
              <h3>Order Accuracy :</h3>
              <Switches/>
              <h3>Speed of Service :</h3>
              <Switches/>
              <h3>Overall Experience :</h3>
              <Switches/>
              <h3>Any comments, questions or suggestions ?</h3>
            </Hstyle>
            <Feed>
              <textarea type="text" placeholder='Type here..' onChange={(e)=>setData({...redata,msg:e.target.value})}></textarea><br/>
              <input type="submit" style={{height:"35px",width:"100px",backgroundColor:"orange",color:"white"}}/>
            </Feed>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Review