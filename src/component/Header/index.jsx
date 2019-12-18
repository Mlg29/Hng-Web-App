import React from "react"
import "./Header.css"
import Button from "../Button/index"

class Header extends React.Component {
    render() {
                
            return (
                <div>
                    <div className="container">
                        <div className="row header2">
                            <div className="header">
                                <h2 className="header-text">Welcome to<br /> HNG 7.0 Internship</h2>
                                <p className="header-paragraph">The HNG Internship is an ambitious attempt to change<br /> 
                                the way education is done in Africa. It’s the bridge<br /> 
                                between learning to code, and becoming the best in the<br /> world.</p>
                                <Button>Get Started</Button>
                                <h2 className="count-down">Count down to HNG 7.0</h2>
                                
                            
                            </div>

                            <div className="header3">
                                <img className="image-header1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/ovzfrlkaxmvuqihkffg7.png" alt=""  width="200"/>
                                <img className="image-header2"  src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/lxdkcbec9nt4x2oowiiy.png" alt="" width="200"/>
                                <img className="image-header3" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473613/hng7.0/nw5gmgh9cyyjggxwipxg.png" alt="" width="200"/>
                            </div>
                        </div>
                    </div>

                
                </div>
            )
    }
    
}

export default Header