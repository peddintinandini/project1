import React from "react";
import './footer.css';
function Footer(){
    return (
        <div className="footer">
            <div style={{width:"250px",paddingLeft:"5%"}}>
                <div className="about">About</div>
                <hr className="hr"/>

                <a class="btn btn-link" href="">About Us</a>
           <a class="btn btn-link" href="">Contact Us</a>
        <a class="btn btn-link" href="">Reservation</a>
        <a class="btn btn-link" href="">Privacy Policy</a>
        <a class="btn btn-link" href="">Terms & Condition</a>

            </div>
            <div style={{width:"350px",paddingLeft:"6%"}}>
            <h1 className="contact_information">Contact Information</h1>
        <hr className="hr"/>
        <div className="contact_info">
        <span className="phone_contact"> Phone number: 8096049234</span>
        <span className="location"> Address:6-56,surampalem</span>
        <span className="email"> Email: peddintinandini1@gmail.com</span>
            </div>
        </div>
        <div style={{width:"300px",paddingLeft:"5%"}}>
            <h1 className="opening">opening</h1>
            <hr className="hr"/>
            <h5 style={{color:"white"}}>Monday - Saturday</h5>
            <p style={{color:"white"}}>09AM - 09PM</p>
            <h5 style={{color:"white"}}>Sunday</h5>
            <p style={{color:"white"}}>10AM - 08PM</p>
        </div>
        <div></div>
        </div>
    )
}
export default Footer;