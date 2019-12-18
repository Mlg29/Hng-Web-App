import React from "react"
import "./Movement.css"




function Movement() {
    return (
        <div className="movement">
            <h1 className="text-center movement-header">Support the Movement</h1>

            <div className="movement-div">
                <div className="movement-div-div">
                    <img className="movement-image" src="https://img.icons8.com/ultraviolet/40/000000/donate.png" alt="" />
                    <h3 className="movement-div-header">Donate to the Program</h3>
                    <a className="movement-link" href="">Get Started</a>
                </div>

                <div className="movement-div-div">
                    <img className="movement-image" src="https://img.icons8.com/ultraviolet/40/000000/handshake.png" alt="" />
                    <h3 className="movement-div-header">Become a Partner</h3>
                    <a className="movement-link" href="">Get Started</a>
                </div>

                <div className="movement-div-div">
                    <img className="movement-image" src="https://img.icons8.com/ultraviolet/40/000000/initiate-money-transfer.png" alt="" />
                    <h3 className="movement-div-header">Sponsor via software or tool</h3>
                    <a className="movement-link" href="">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Movement