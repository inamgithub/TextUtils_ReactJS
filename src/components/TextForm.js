import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleUpCase = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value)
  }

  const handleLoCase = () => {
    // console.log("Lowercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = () => {
    // console.log("Clear was Clicked");
    let newText = '';
    setText(newText);
  }
  
  const handleCopy = () => {
    // console.log("Copy was Clicked");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleSpace = () => {
    // let newText = text.split(/\s+/)  // this will also remove all the spaces
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} ></textarea>
            </div>
            <button className="btn btn-success mx-1 " onClick={handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-success mx-1 " onClick={handleLoCase}>Convert to Lowercase</button>
            <button className="btn btn-success mx-1 " onClick={handleClear}>Clear</button>
            <button className="btn btn-success mx-1 " onClick={handleCopy}>Copy Text</button>            
            <button className="btn btn-success mx-1 " onClick={handleSpace}>Remove Extra Space</button>            
            
        </div >

        <div className="container">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0 ? text:"Enter text in the above textbox to preview here"}</p>
        </div>
    </>
  )
}
