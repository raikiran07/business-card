import React from "react"
import Email from "../images/email.png"
import LinkedIn from "../images/linkedin.png"

export default function ButtonContainer(){
    return(
        <div className="btn-container">
            <button className="btn">
                <p> <img src={Email} alt="email-image" className="email-image" /><span>Email</span></p>
             
            </button>
            <button className="btn blueColor">
               <p><img src={LinkedIn} alt="linkedIn-image" className="linkedIn-image" /><span>LinkedIn</span></p> 
                {/* <p>LinkedIn</p> */}
            </button>
        </div>
    )
}