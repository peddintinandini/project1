import React from 'react';
import Cardd from '../card/cardd';
import Carddata from '../card/carddata';
import pic from './chef.jpg'
import styled from 'styled-components';
import pic1 from './logoo.webp'
function Section() {
  return (
    <>
    <div style={{backgroundColor:"white",height:"100px",backgroundSize:"cover",backgroundPosition:"center",fontSize:
    "40px",fontFamily:"cursive",paddingTop:"80px",color:'orange'}}>COME FILL YOURS STOMACHS</div>
    <div style={{backgroundColor:"black",height:"700px",backgroundSize:"cover",backgroundPosition:"center"}}>
    <div className='home-card'>
      <Cardd details={Carddata}/>
      </div>
    </div>
    <Div><div>
      <img src = {pic}/>
      <img src = {pic1} style={{float:'left',paddingLeft:"5px"}}/>
      <h1>Chef's Kitchen</h1>
      <p>The first requirement for your restaurant website is 
        a current design consistent with your brand and the appearance
         of your restaurant. Businesses like that can offer a wide range
          of customisable templates developed exclusively for restaurants
           if you need the means to engage a website designer. Utilising 
           any of these templates with professional photographs of your restaurant's
            interior, food, and employees will make the template distinctive and yours.</p>
      </div>
    </Div>
    </>
  );
}
const Div = styled.div`
    div{
      height:500px;
      width:cover;
    }
    img{
      height:500px;
      width:300px;
      padding-left:80px;
      display:inline-block;
      float:left
      }
      h1{
        padding-top:50px;
        text-Align:center;
        color:orange;
        font-family:Cursive;

      }
      p{
      height:60px;
      font-size:25px;
      font-family:Cursive;
      text-Align:justify
    }
`
export default Section;




