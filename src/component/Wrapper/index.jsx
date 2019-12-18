
import React from "react"
import "./Wrapper.css"


function Wrapper(props) {
    return (
        <header className="header-wrapper">
            {props.renderProp()}
        </header>
    )
}


export default Wrapper