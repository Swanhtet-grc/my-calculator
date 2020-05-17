import React from "react";
import "./Card.css"
const operator = (props) => {
    return (
        <div className="Card" onClick={() => { props.click() }}>{props.num}</div>
    )
}

export default operator;