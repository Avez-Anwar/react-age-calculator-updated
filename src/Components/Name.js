import React from "react"
import "./Styles.css";



function Name(props) {
    return (
        <div className="div-two">
            {props.text.map((texts) => {
                return <h3 key={texts.id}>Hey: {texts.name}!!!! 😎</h3>;
            })}
        </div>
    );
}

export default Name