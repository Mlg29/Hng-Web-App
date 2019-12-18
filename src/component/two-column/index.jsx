import React from "react"
import "./Column.css"
import Button from "../Button"


function Column(props) {
    return (
        <div>
            <div className='container'>
                <div className="row column">
                    <div className="col-lg-6">
                        <h3 className="col-header">{props.header}</h3>
                        <p className="col-paragraph">{props.paragraph}</p>
                        <Button>{props.button}</Button>
                    </div>

                    <div className="col-lg-6">
                        <img className="col-image" src={props.image} alt="" width="350" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Column