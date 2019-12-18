
import React from "react"
import "./Mentor.css"
import  Button  from "../Button"



function Mentor() {
    return (
        <div className="mentor">
            <h1 className="mentor-header text-center">Our Dedicated Mentors</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mentor-divv">
                        <div>
                            <img className="mentor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473617/hng7.0/dcf6jekupqdu6k1j5qog.png" alt="" />
                            <h3 className="mentor-div-header text-center">Ryan Tompson</h3>
                            <p className="mentor-div-paragraph text-center">Web Developer</p>
                        </div>
                        <div>
                            <img className="mentor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473615/hng7.0/srthzqpd0afolivlvhj0.png" alt="" />
                            <h3 className="mentor-div-header text-center">Romina Hadid</h3>
                            <p  className="mentor-div-paragraph text-center">Marketing Strategist</p>
                        </div>
                        <div>
                            <img className="mentor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/fwweywqk1teebgpugbcc.png" alt="" />
                            <h3 className="mentor-div-header text-center">Alexander Smith</h3>
                            <p  className="mentor-div-paragraph text-center">UI/UX Designer</p>
                        </div>
                        <div>
                            <img className="mentor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/fwweywqk1teebgpugbcc.png" alt="" />
                            <h3 className="mentor-div-header text-center">John Doe</h3>
                            <p  className="mentor-div-paragraph text-center">Founder and CEO</p>
                        </div>
                                                                                                
                    </div>
                </div>
            </div>

            <div className="mentor-button">
                <a href="/mentors"><Button>See More</Button></a>
            </div>
            
        </div>
    )
}


export default Mentor