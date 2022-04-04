import React from "react"
import ProfileImage from "../images/myProfile.jpg"

export default function ProfileContainer(){
    return(
        <div className="profile-container">
            <img src={ProfileImage} alt="profile image" className="profile-image" />
            <h1 className="profile-title center">Kiran Rai</h1>
            <p className="position center">Frontend developer</p>
            <p className="website center">raikiran.me</p>
        </div>
    )
}