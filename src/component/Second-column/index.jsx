import React from "react"
import "./Column2.css"
import Button from "../Button"


function SecondColumn(props) {
    return (
        <div>
            <div className='container'>
                <div className="row column2">
                <div className="col-lg-6">
                        <img className="col-image2" src={props.image} alt="" width="350" />
                </div>
                <div className="col-lg-6">
                    <h3 className="col-header2">{props.header}</h3>
                    <p className="col-paragraph2">{props.paragraph}</p>
                    <Button>{props.button}</Button>
                </div>
                  
                </div>
            </div>
        </div>
    )
}

export default SecondColumn