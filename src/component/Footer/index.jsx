import React from "react"
import "./Footer.css"



function Footer() {
    return (
        <div className="footer">
            <div className="jumbotron">
                <div className="row footer-section">
                    <img className="footer-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473613/hng7.0/v5cby8ialrkdpyfu32gx.png" alt="" width="250" height="80" />
                    <div className="footer-div">
                        <div className="footer-div-div">
                            <h1 className="footer-div-header">Quick Links</h1>
                            <p className="footer-div-paragraph"><a href="">Join HNG</a></p>
                            <p className="footer-div-paragraph"><a href="">About HNG</a></p>
                            <p className="footer-div-paragraph"><a href="">Become a Sponsor</a></p>
                            <p className="footer-div-paragraph"><a href="">Signup as a mentor</a></p>
                        </div>

                        <div className="footer-div-div">
                            <h1 className="footer-div-header">Contact Us</h1>
                            <p className="footer-div-paragraph"><b>Phone:</b><br /> +234 (0) 812 345 6789</p>
                            <p className="footer-div-paragraph"><b>Email:</b><br />interns@hng.tech</p>
                        </div>
                        <div className="footer-div-div">
                            <h1 className="footer-div-header">Office Address</h1>
                            <p className="footer-div-paragraph">3 Birrel Avenue<br />Sabo, Yaba,<br />Lagos State</p>
                        </div>
                        <div className="footer-div-div">
                            <h1 className="footer-div-header">Follow Us</h1>
                            <img className="image-footer" src="https://img.icons8.com/ios-glyphs/25/ffffff/twitter.png" alt="" />
                            <img className="image-footer" src="https://img.icons8.com/ios-glyphs/25/ffffff/facebook-new.png" alt="" />
                            <img className="image-footer" src="https://img.icons8.com/ios-glyphs/25/ffffff/domain.png" alt="" />
                            
                        </div>

                    </div>
                                        
                    <h2 className="text-center footer-copyright">&copy 2019, HNG Internship All right reserved</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer