import React from "react";
import "./style.css"


function Button({ text, outlined, onClick }) {

    return (
        <button className={outlined ? "outline-btn" : "btn"} onClick={(e) => onClick(e)}>
            {text}

        </button>
    )
}

export default Button;
