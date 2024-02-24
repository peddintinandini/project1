import i1 from '../images/i1.jpg'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
// backgroundImage:`url(${i1})`
function Contact(){
    const div1 = {
        height:"200px",
        width: "200px",
        backgroundColor: "Orange",
        float:"left",
        margin: "40px",
        borderRadius:"10px"
    }
    const [formdata,setData] = useState({
        'username':'',
        'email':'',
        'sub':'',
        'msg':''
    })

    let backend_api = 'http://localhost:3333/addform'
    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        axios.post(backend_api,formdata).then((res)=>{
            console.log(res.body)
            alert("success")
            window.location.href = '/contact'
        })

    }
    return(
        <>
            <div style={{backgroundColor:"black",height:"600px",width:"100%"}}>
                <img src={i1} style={{opacity:"0.5",objectFit:"cover",width:"100%",height:"600px",backgroundSize:"cover"}} alt=""/>
            </div>
            <div style={{height:"330px"}}>
                <h1 style={{color:"orange",fontFamily:"cursive",textAlign:"center"}}>Contact Information</h1>
                <Div2>
                    <div style={{height:"200px",width:"180px",float:"left"}}></div>
                    <div style={div1}>
                        <h4>Address:</h4>
                        <p>P8RG+5M8, NH16, Isukathota, Maddilapalem, Visakhapatnam, Andhra Pradesh</p>
                    </div>
                    <div style={div1}>
                        <h4>Phone:</h4>
                        <p>+ 1235 2355 98</p>
                    </div>
                    <div style={div1}>
                        <h4>Email:</h4>
                        <p>myrestaurant@gmail.com</p>
                    </div>
                    <div style={div1}>
                        <h4>Opening Hours:</h4>
                        <p>Monday-Friday: 10:00 AM to 10:00 PM</p>
                    </div>
                </Div2>
            </div>
            <div style={{height:'500px'}}>
                <div style={{width:"720px",float:"left"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9078509.084530631!2d73.24504758489095!3d19.01703047040966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943523d7988df%3A0x6f1ad2eb4e90f11!2sMy%20Restaurant!5e0!3m2!1sen!2sin!4v1699195913266!5m2!1sen!2sin"
                    height="450px" width="500px" style={{border:"0",float:"left",marginLeft:"200px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div style={{float:"left",height:"450px",width:"400px"}}>
                    <Form>
                        <form onSubmit={handlesubmit}>
                            <h2 style={{color:"orange",fontFamily:"cursive"}}>Find us Here</h2>
                            <input type = "text" name='name' placeholder='Your Name' onChange={(e)=>setData({...formdata,username:e.target.value})}/><br/>
                            <input  type = "text"  name='email' placeholder='Your Email' onChange={(e)=>setData({...formdata,email:e.target.value})}/><br/>
                            <input  type = "text"  name='sub' placeholder='Subject' onChange={(e)=>setData({...formdata,sub:e.target.value})}/><br/>
                            <textarea  type = "text"  name='msg' placeholder='Message' onChange={(e)=>setData({...formdata,msg:e.target.value})}/><br/>
                            <button type="submit" value="submit">Send Message</button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}

const Div2 = styled.div`
p,h4{
    font-family:cursive;
    color:white;
}
h4{
    font-size:20px;
    color:white;
}
`
const Form = styled.div`
input{
    height:10px;
    width:300px;
    padding:15px;
    margin:10px;
    border-radius:4px;
}
textarea{
    height:80px;
    width:300px;
    padding:15px;
    margin:10px;
    border-radius:4px;
}
button{
    height:40px;
    background-color:orange;
    width:100px;
    border-radius:25%;
    color:white;
}
` 
export default Contact