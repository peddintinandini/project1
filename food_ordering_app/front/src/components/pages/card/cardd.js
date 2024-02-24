import React from "react";
import "./cardd.css"
const Cardd = (props) =>{
    return(
        <>
        {props.details.map((value,index)=>(
        <div className="cardd" key={index}>
            <div className="card-image">
                <img src={value.img}/>
            </div>
        </div>
         ))}
        </>
    )
}
export default Cardd;