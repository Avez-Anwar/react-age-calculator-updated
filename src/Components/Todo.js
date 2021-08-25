import React, { useState } from "react";
import Age from "./Age";
import "./Styles.css";
import Name from "./Name";

function Todo() {
    const [name, setName] = useState(" ");
    const [age, setAge] = useState(" ");
    const [items, setItems] = useState([]);
    const [text, setText] = useState([]);

    const handleChange = (event) => {
        setAge(event.target.value.substr(0, 4));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (age.trim() === "") {
            return;
        } else if (name.trim() === "") {
            return;
        }
        var d = new Date();
        var n = d.getFullYear();

        console.log(n);
        const newAge = {
            age: n - age,
            id: Date.now()
        };
        setItems(items.concat(newAge));
        setAge(" ");

        const newName = {
            name: name,
            id: Date.now()
        };
        setText(text.concat(newName));
        setName(" ");
    };
    console.log(items);
    return (
        <div>
            <h1>Age Calculator 📆</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ color: "" }}>Enter your Name 📋: </div>
                <input style={{ textTransform: "capitalize" }} type="text" onChange={handleChangeName} value={name} />
                <div>Enter your Year of birth 📱: </div>
                <input type="number" onChange={handleChange} value={age} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <span>
                <Name text={text} />
                <Age items={items} />
            </span>
        </div>
    );
}

export default Todo;




