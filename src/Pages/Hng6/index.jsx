import React from "react"
import "./Hng.css"
import Navigation from "../../component/Navigation"
import Intern from "../../component/Intern"
import Button from "../../component/Button"
import Pictures from "../../component/Pictures"
import Sponsor from "../../component/Sponsor"
import Footer from "../../component/Footer"

function Hng() {
    return (
        <div>
            <div>
                <Navigation />
                <div className="about">
                    <h2 className="about-header text-center">Countdown to HNG 7.0</h2>
                    <div className="about-div">
                        <div className="about-div-div">
                            <h1 className="about-div-header">05</h1>
                            <p className="about-div-paragraph">DAYS</p>
                        </div>

                        <div className="about-div-div">
                            <h1 className="about-div-header1">23</h1>
                            <p className="about-div-paragraph">HOURS</p>
                        </div>
                        <div className="about-div-div">
                            <h1 className="about-div-header2">52</h1>
                            <p className="about-div-paragraph">MINUTES</p>
                        </div>
                        <div className="about-div-div">
                            <h1 className="about-div-header3">41</h1>
                            <p className="about-div-paragraph">SECONDS</p>
                        </div>
                        
                    </div>
                    <h2 className="text-center about-header2">REGISTER FOR HNG 7.0 NOW</h2>
                </div>

               
            </div>
            <Intern />

            <div>
                <h2 className="text-center about-section-header">How it All Happened</h2>
                <Pictures />
                <Pictures />
                <Pictures />
                <Pictures />
                <Pictures />
                <div className="about-section-button">
                    <a href="/about"><Button>View Less Photos</Button></a>
                </div>
                
            </div>

            <div className='participant'>
                <div className="participant-div">
                    <h1 className="participant-header">Participation</h1>
                    <p className="participant-paragraph">More than 5000 intellectuals participated in the HNG 6.0 Internship programme.</p>

                    <p className="participant-paragraph">We had people living in Africa, Europe and Asia sign up for the programme.</p>

                    <p className="participant-paragraph">Participation was achieved remotely via a popular collaboration tool called Slack.</p>
                    <div className="participant-button">
                        <Button>Join HNG</Button>
                    </div>
                    
                </div>
                
                <div className="participant-div2">
                    <img className="participant-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473618/hng7.0/ueriagubiwje3okfxvs6.png" alt="" />
                </div>
            </div>

            <div className="track">
                <h1 className="track-header text-center">HNG 6 Internship Track (Curriculumn)</h1>
                
                <div className="track-div">
                    <div className="track-div-div">
                        <p className="track-paragraph">Those who participated in HNG 6 Internship Programme were divided into groups according to their interests.</p>
                        <p className="track-paragraph">The groups are popularly known as Tracks in HNG 6 Internship and each of the follwing curriculums defines the activity for the track they get featured in.</p> 
                        <p className="track-paragraph">At some point in the programme, collaboration of participants from different tracks is achieved.</p>
                    </div>
                    <div className="track-div-div2">
                        <p className="track-paragraph2">BACKEND TRACK</p>
                        <p className="track-paragraph2">UI/UX DESIGN TRACK</p>
                        <p className="track-paragraph2">MACHINE LEARNING TRACK</p>
                        <p className="track-paragraph2">FRONTEND TRACK</p>
                        <p className="track-paragraph2">DIGITAL MARKETING TRACK</p>
                        <p className="track-paragraph2">MOBILE DEVELOPMENT TRACK</p>
                    </div>
                </div>
                
            </div>

            <div className="mentors">
                <div className="mentors-mentor">
                    <div className="mentors-div">
                        <h1 className="mentors-header">HNG 6 Internship Mentors</h1>
                        <p className="mentors-paragraph">Mentors are responsible for day to day running of HNG Internship Programme.</p>

                        <p className="mentors-paragraph">They are usually recruited from past editions of HNG Internship Programmes.</p>

                        <p className="mentors-paragraph">They oversee activities in the programme and make sure interns adhere to the ru;es and regulations of the programme.</p>
                    </div>

                    <div className="mentors-div2">
                        <div className="mentors-div-div">
                            <div className="mentors-div-div-div">
                                <img className="mentors-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473617/hng7.0/dcf6jekupqdu6k1j5qog.png" alt="" />
                                <h3 className="mentors-header2">Ryan Tompson</h3>
                                <p className="mentors-paragraph2">Mentor, HNG 5.0</p>
                            </div>
                            <div className="mentors-div-div-div2">
                                <img className="mentors-image2" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473615/hng7.0/srthzqpd0afolivlvhj0.png" alt="" />
                                <h3 className="mentors-header2">Romina Hadid</h3>
                                <p className="mentors-paragraph2">Mentor, HNG 5.0</p>
                            </div>
                        </div>

                        <div className="mentors-button">
                            <a href="/mentors"><Button>See all Mentors</Button></a>
                        </div>
                        
                    </div>
                </div> 
            </div>
            <Sponsor />
            <Footer />
        </div>
    )
}


export default Hng