import React from "react"
import "./home.css"
import Navigation from "../../component/Navigation/index"
import Header from "../../component/Header"
import Creativity from "../../component/Creativity"
import Work from "../../component/How-it-work"
import Curriculum from "../../component/Curriculum"
import Mentor from "../../component/Mentor"
import Hng from "../../component/Hng6"
import Movement from "../../component/Movement"
import Sponsor from "../../component/Sponsor"
import Footer from "../../component/Footer"

function Home() {
    return (
        <div>
            <Navigation />
            <Header />
            <Creativity /> 
            <Work /> 
            <Curriculum />
            <Mentor /> 
            <Hng />
            <Movement />
            <Sponsor />
            <Footer /> 
        </div>
    )
}

export default Home