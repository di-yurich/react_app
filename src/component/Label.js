import React from "react";


function Label(options) {
  return (
    <div className="obj">
        <label className="label">{options.title} </label>
        <input type="text" className="input"></input>
        <button className="button">add {options.title}</button>
    </div>)
}

export default Label;