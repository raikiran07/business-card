import React from "react"
import Email from "../images/email.png"
import Twitter from "../images/twitter.png"
import LinkedIn from "../images/linkedin.png"
import Call from "../images/phone-call.png"

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="link-container">
            <img src={Email} alt="email image" className="image" />
            <img src={Twitter} alt="twitter image" className="image" />
            <img src={LinkedIn} alt="linkedIn image" className="image" />
            <img src={Call} alt="phone image" className="image" />
            </div>
           
            

        </footer>
    )
}