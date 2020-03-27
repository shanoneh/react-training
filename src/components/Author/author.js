import React from 'react';
import './author.css'

const Author = (props) => {
    return (
    <div className="authors pull-right">
        <h2>{props.fullName}</h2>
        <p>{props.children}</p>
        <button className="btn btn-success align" onClick={props.click}>تغییر اسامی</button>
        <div className="margin-top">
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </div>
    )
};

export default Author;