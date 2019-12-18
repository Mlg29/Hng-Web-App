import React from "react"
import './Work.css'
import Column from "../two-column"
import SecondColumn from "../Second-column"




function Work() {
    return (
        <div>
            <h3 className="creative-header">How  does it Work ?</h3>
            <div className="">
                    <Column 
                    header="Apply to become an Intern"
                    paragraph="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. "
                    button="Get Started"
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/v9advsjp5styzsrldrdy.png"
                />
            </div>

            <div className="">
                    <SecondColumn 
                    header="Onboard and Connect with Teammates"
                    paragraph="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. "
                    button="Get Started"
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473618/hng7.0/ueriagubiwje3okfxvs6.png"
                />
            </div>

            <div className="">
                    <Column 
                    header="Build Scalable Products & Grow"
                    paragraph="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. "
                    button="Get Started"
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473620/hng7.0/mc6zc0x6oirgrxbvsf4j.png"
                />
            </div>
        </div>
    )
}

export default Work