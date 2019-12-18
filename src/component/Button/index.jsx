import React from "react"
import "./Button.css"

function Button(props) {
    return (
        <div>
            <button type="btn" className="btn btn-primary">{props.children}</button>
        </div>
    )
}

export default Button