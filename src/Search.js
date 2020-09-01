import React from 'react'
import './App.scss';

export default function Search() {
    return (
        <div className="search">
             <input type="text" placeholder="Search.."></input>
             <button type="submit">Submit</button>
        </div>
    )
}
