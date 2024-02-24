import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css"
const Array = [];
const Card = () => {
    const [table_num, setTableno] = useState('')
    const [array,setarray] = useState({})
    let [card, setcarddata] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3333/getform')
        .then((response) => {
          setcarddata(response.data.formdata);
        })
    }, []);
const additem = (h) =>{
   card.filter((e,i)=>{
    if(i == h){
      Array.push(e.name)}
   });
    setarray({Array})
  // let name = data.name
  // setarray((prevState) => ({
  //   ...prevState,
  //   name
  // }));
  console.log(array)
   }
   const handle = (table_num)=>{
    setTableno(table_num)
  }
    const sub = (e)=>{
      e.preventDefault();
      var obj = {
        table_num,
        array
      }
      axios.post('http://localhost:3333/addtable',obj).then((res)=>{
        console.log(res.data);
      })

    }
   
    return (
        <div>
           <div className="top">
            <h1 className="helo">Hundreds of flavors under one roof....</h1>
            </div>
            <div className="Main">
        <div className="home-cards">
        {card.map((ele,i) => {
            return (
         <div className="card">
             <div className="card-image">
             <img style = {{borderRadius:"0"}}src={`http://localhost:3333/images/${ele.img}`} alt="" />
             </div>
             <div>
                 <p className="description">{ele.text}</p>
                 <p className="card-title">{ele.name}</p>
                 <p style={{float:"left",color:"maroon",fontWeight:"bold",paddingLeft:"40px",paddingBottom:"10px"}}> {ele.price} </p>
                 <button onClick={()=>additem(ele)} style={{marginTop:"19px",marginLeft:"30px",color:"maroon",border:"3px solid maroon",borderRadius:"5px",padding:"3px",fontWeight:"bold",fontFamily:"cursive"}}>&nbsp;ADD&nbsp;</button>
                 </div>
        </div>
         )}  )}  
             </div>
             <div className="input-button">
             <input type="text" placeholder="Enter Your Table Number" onChange={(e)=>handle(e.target.value)}/><br/><br/>
             <button type="submit" value="submit" onClick={sub}>Submit</button>
             <br/><br/>
             </div>
    </div>  
        </div>
    )
            }
export default Card;