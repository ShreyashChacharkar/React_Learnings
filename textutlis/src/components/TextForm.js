import React, { useState } from 'react';


export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    console.log("Uppercase was clicked" + text)
    let newText = " ";
    setText(newText)
  }
  const [text, setText] = useState("Enter this text here");
  // setText("New Text");
  return (
    <div>
      <h1>
        {props.headings} 
      </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
    </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>

    <div className="container">
      <h1>
        Your Text summmary
      </h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008* text.split(" ").length } Minutes to read text</p>
      <h2>
        Preview
      </h2>
      <p>{text}</p>
    </div>
    </div>

  );
}
