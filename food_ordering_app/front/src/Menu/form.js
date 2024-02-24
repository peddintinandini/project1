import { useState } from "react";
import axios from "axios";
const Form = () => {
    const[formdata, setFormdata] = useState({
        'name':'',
        'img':'',
        'price':'',
        'rating':'',
        'text':''
    })
    const handlesubmit = (e) => {
        e.preventDefault()
        const Inputfields = new FormData()
        Inputfields.append('name',formdata.name)
        Inputfields.append('img',formdata.img,formdata.img.name)
        Inputfields.append('price',formdata.price)
        Inputfields.append('rating',formdata.rating)
        Inputfields.append('text',formdata.text)
        
        // e.preventDefault();
        // const{name,img,price,rating,text}=formdata
        console.log(Inputfields)
        axios.post('http://localhost:3333/addform',Inputfields,formdata)
        .then((res) => {
            console.log(res.data)
            if(res.data)
            {
                setFormdata({
                    'name':'',
                    'img':'',
                    'price':'',
                    'rating':'',
                    'text':''
                })
            }
        }
            
         )}
    return(
        <>
        <h1>Form</h1>
        <form onSubmit={handlesubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={(e) =>setFormdata({...formdata,name:e.target.value})}/>
            <br/>
            <label>Filename:</label>
            <input type="file" name="filename" onChange={(e) =>setFormdata({...formdata,img:e.target.files[0]})}/>
            <label>price:</label>
            <input type="text" name="rollno" onChange={(e) =>setFormdata({...formdata,price:e.target.value})}/>
            <br/>
            <label>rating:</label>
            <input type="text" name="college" onChange={(e) =>setFormdata({...formdata,rating:e.target.value})}/>
            <br/>
            <label>text:</label>
            <input type="textarea" name="branch" onChange={(e) =>setFormdata({...formdata,text:e.target.value})}/>
            <br/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
    }

export default Form;