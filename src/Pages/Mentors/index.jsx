import React from "react"
import "./mentors.css"
import Wrapper from "../../component/Wrapper"
import Navigation from "../../component/Navigation"
import MentorImage from "../../component/Mentors-image"
import Footer from "../../component/Footer"

function HngMentors() {
    return (
        <div>
            <Wrapper renderProp={() => (
                <div>
                    <Navigation />

                    <div className="mentor-div">
                        <h1 className="mentor-headers">Our Mentors</h1>
                        <p className="mentor-paragraphs">Our mentors who are experienced in various sector contributes their time and knowledge in making sure the interns get the best guide as they begin their journey into the tech industry</p>
                    </div>
                </div>
            )}
            />
            <div>
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
                <MentorImage 
                    firstName="Oluwatoni Atunrase" secondName="Patrick Aziken" thirdName="Stephen Azubuike" fourthName="Everitus Olumese"
                    firstStack="Web Developer" secondStack="Software Tester" thirdStack="UI/UX Designer" fourthStack="Developer"
                />
            </div>
            <div style={{marginTop: "10%"}}>
                <Footer />
            </div>
           
        </div>
    )
}

export default HngMentors