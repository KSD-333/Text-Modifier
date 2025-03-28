import React, { useState } from 'react'

export default function TextForm() {
  const Uppercase = () => {

    let newText = Text.toUpperCase();
    setText(newText);
  }
  const Lowercase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  }
  const Reaverse = () => {
    let newText = Text.split("").reverse().join("")
    setText(newText);
  }
  const Clear = () => {
    let newText = '';
    setText(newText);
  }
  const HandelUp = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const [Text, setText] = useState("Enter Text Here");
  return (
    <div className='container'>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={Text} onChange={HandelUp}></textarea>
      </div>
      <button type="button" class="btn btn-primary mx-1" onClick={Uppercase}>Uppercase</button>
      <button type="button" class="btn btn-primary mx-1" onClick={Lowercase}>Lowercase</button>
      <button type="button" class="btn btn-primary mx-1" onClick={Clear}>Clear</button>
      <button type="button" class="btn btn-primary mx-1" onClick={Reaverse}>Reaverse</button>
      <div className="container my-3">
        <p>{Text.split(" ").length  } Words And {Text.length} Characters Are Present</p>
        <p>{0.008 * Text.split(" ").length} Time Require To Read</p>
        <h3>Preaviw</h3>
        <p>{Text}</p>
      </div>
      
    </div>
  )
}
