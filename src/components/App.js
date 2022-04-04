import React from "react"
import ReactDOM from "react-dom"
import ProfileContainer from "./ProfileContainer"
import Buttons from "./Buttons"
import MainContent from "./MainContent"
import Footer from "./Footer"

export default function App(){
    return(
        <div className="container">
        <ProfileContainer/>
        <Buttons />
        <MainContent />
        <Footer />
        </div>
    )
}