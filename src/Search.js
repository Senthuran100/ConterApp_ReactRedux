import React, { useState } from 'react'
import './App.scss';

export default function Search() {
    const [content, setContent] = useState("");

    const handleChange = (e) => {
        setContent(e.target.value);
    }
    return (
        <div className="search">
            <h1>{content}</h1>
            <input type="text" placeholder="Type Content ...." name='content11' onChange={handleChange}></input>
        </div>
    )
}
