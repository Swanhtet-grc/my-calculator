import React from "react";
import "./Card.css"
const card = (props) => {
    var num = props.num;
    return (
        <div className="Card" onClick={() => { props.click(num) }}>{props.num}</div>
    )
}

export default card;