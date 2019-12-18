
import React from "react"
import "./Mentor-image.css"



function MentorImage(props) {
    return (
        <div className="mentor-image">
            <div className="mentor-div">
                <img className="image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473617/hng7.0/dcf6jekupqdu6k1j5qog.png" alt="" />
                <h1 className="mentor-header">{props.firstName}</h1>
                <p className="mentor-paragraph">{props.firstStack}</p>
                <div className="image-div">
                    <img className="image-icon" src="https://img.icons8.com/ios-glyphs/25/ffffff/twitter.png" alt="" />
                    <img className="image-icon" src="https://img.icons8.com/ios-glyphs/25/ffffff/facebook-new.png" alt="" />
                    <img className="image-icon" src="https://img.icons8.com/ios-glyphs/25/ffffff/domain.png" alt="" />
                    
                </div> 
            </div>

            <div className="mentor-div">
                <img  className="image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473615/hng7.0/srthzqpd0afolivlvhj0.png" alt="" />
                <h1 className="mentor-header">{props.secondName}</h1>
                <p className="mentor-paragraph">{props.secondStack}</p>
                <div className="image-div">
                    <img className="image-icon2" src="https://img.icons8.com/ios-glyphs/25/ffffff/twitter.png" alt="" />
                    <img className="image-icon2" src="https://img.icons8.com/ios-glyphs/25/ffffff/facebook-new.png" alt="" />
                    <img className="image-icon2" src="https://img.icons8.com/ios-glyphs/25/ffffff/domain.png" alt="" />
                    
                </div> 
            </div>

            <div className="mentor-div">
                <img  className="image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/fwweywqk1teebgpugbcc.png" alt="" />
                <h1 className="mentor-header">{props.thirdName}</h1>
                <p className="mentor-paragraph">{props.thirdStack}</p>
                <div className="image-div">
                    <img className="image-icon3" src="https://img.icons8.com/ios-glyphs/25/ffffff/twitter.png" alt="" />
                    <img className="image-icon3" src="https://img.icons8.com/ios-glyphs/25/ffffff/facebook-new.png" alt="" />
                    <img className="image-icon3" src="https://img.icons8.com/ios-glyphs/25/ffffff/domain.png" alt="" />
                    
                </div> 
            </div>

            <div className="mentor-div">
                <img  className="image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473614/hng7.0/fwweywqk1teebgpugbcc.png" alt="" />
                <h1 className="mentor-header">{props.fourthName}</h1>
                <p className="mentor-paragraph">{props.fourthStack}</p>
                <div className="image-div">
                    <img className="image-icon4" src="https://img.icons8.com/ios-glyphs/25/ffffff/twitter.png" alt="" />
                    <img className="image-icon4" src="https://img.icons8.com/ios-glyphs/25/ffffff/facebook-new.png" alt="" />
                    <img className="image-icon4" src="https://img.icons8.com/ios-glyphs/25/ffffff/domain.png" alt="" />
                    
                </div> 
            </div>
        </div>
    )
}

export default MentorImage