import React from "react"
import "./Sponsor.css"
import Button from "../Button"



function Sponsor() {
    return (
        <div className="sponsor">
            <h1 className="text-center sponsor-header">Hng 6.0 Internship Sponsors</h1>
            <div className="sponsor-div">
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473619/hng7.0/dhwjv1e7fbpyctqtfdke.png" alt="" />
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473613/hng7.0/rzg9snw5g0t2nhbeiwef.png" alt="" />
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473615/hng7.0/dgcjijvijerqg9pgfnpd.png" alt="" />
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473618/hng7.0/d8yobenextl0hqynfgsv.png" alt="" />
            </div>
            <div className="sponsor-div">
                <h1 className="sponsor-text">Figma</h1>
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473618/hng7.0/szrg56vau5telahppvhr.png" alt="" />
                <img className="sponsor-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575473613/hng7.0/oxms5c4zppkal5e75bwt.png" alt="" />
            </div>

            <div className="sponsor-button">
                <Button>Become a Sponsor</Button>
            </div>
            

        </div>
    )
}

export default Sponsor