
import React from "react"
import "./join.css"
import Wrapper from "../../component/Wrapper"
import Navigation from "../../component/Navigation"
import Footer from "../../component/Footer"


function Join() {
    return (
        <div>
            <Wrapper renderProp={() => (
                <div>
                    <Navigation />
                    <div className="join-div">
                        <h1 className="join-header">Mentor Account Set Up</h1>
                        <p className="join-paragraph">Thanks for your interest in becoming a HNG mentor. Kindly fill out this form.</p>
                    </div>
                </div>
            )}
            />

            <div className="expertise">
                <h3 className="text-center expert-header">Choose an area of expertise</h3>
                
                <div>
                    <form className="form">
                        <div className="forms">
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details><b>Preferred Skills:</b>HTML, CSS, Javascript,Bootstrap,JQuery<summary>Frontend Development</summary></details>
                            </div>
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details>Node, Django<summary>Backend Development</summary></details>
                            </div>
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details>Artificial Intelligence<summary>Machine Learning</summary></details>
                            </div>
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details>Figma, Adobe<summary>UI/UX Design</summary></details>
                            </div>
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details>Flutter, Kotin<summary>Mobile Development</summary></details>
                            </div>
                            <div className="form-div">
                                <input className="input" type="checkbox" /><details>Google Digital Skills<summary>Digital Marketing</summary></details>
                            </div>
                        </div>
                        
                        
                    </form>

                    <div className="image-input">
                        <input type="file" className="file" accept="image/*" placeholder="image"/>
                        <p className="image-paragraph">Click on the input above to Upload a Profile photo<br />JPG or PNG, Max size  of 400k</p>
                    </div>


                    <form className="form-data" netlify>
                        <input type="text" className="form-control inputs" placeholder="Name" />
                        <input type="text" className="form-control inputs" placeholder="Email" />
                        <input type="text" className="form-control inputs" placeholder="Phone number" />
                        <input type="text" className="form-control inputs" placeholder="What do you do" />
                        <input type="text" className="form-control inputs" placeholder="Link to your portfolio" />
                        <input type="text" className="form-control inputs" placeholder="Link to your LinkedIn" />
                        <input type="text" className="form-control inputs" placeholder="Link to your CV" />
                        <input type="text" className="form-control inputs" placeholder="Why are you interested in mentoring with HNG ?" />
                        <input type="text" className="form-control inputs" placeholder="What state are you currently located in ?" />
                        <input type="text" className="form-control inputs" placeholder="What is your current employment status ?" />

                        <div className="form-button">
                             <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                       
                    </form>
                </div>
            
            </div>

            <div className="form-footer" >
                 <Footer />
            </div>
           
        </div>
    )
}

export default Join

