import React from "react"
import "./Styles.css";


function Age(props) {
    return (
        <div className="div-one">
            {props.items.map((item) => {
                return <h3 key={item.id}>Your Age is: {item.age} 🍰</h3>;
            })}
        </div>
    );
}

export default Age