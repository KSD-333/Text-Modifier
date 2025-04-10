import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const textareaRef = useRef(null);

  const Uppercase = () => {
    setText(Text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const Lowercase = () => {
    setText(Text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const Reverse = () => {
    setText(Text.split("").reverse().join(""));
    props.showAlert("Text Reversed!", "info");
  };

  const Clear = () => {
    setText("");
    props.showAlert("Text Cleared!", "danger");
  };

  const copyToClipboard = () => {
    textareaRef.current.select();
    navigator.clipboard
      .writeText(textareaRef.current.value)
      .then(() => {
        props.showAlert("Copied to clipboard!", "success");
      })
      .catch((err) => {
        props.showAlert("Failed to copy!", "danger");
      });
  };

  const HandleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
      <h2>Enter the text to analyze below</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          onChange={HandleChange}
          ref={textareaRef}
          style={{
            backgroundColor: props.mode === "dark" ? "#2c2c2c" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1" onClick={Uppercase}>Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={Lowercase}>Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={Reverse}>Reverse</button>
      <button className="btn btn-primary mx-1" onClick={Clear}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy</button>

      <div className="container my-3">
        <p>
          {Text.split(/\s+/).filter((word) => word.length !== 0).length} Words and {Text.length} Characters
        </p>
        <p>
          {0.008 * Text.split(" ").filter((word) => word.length !== 0).length} Minutes Required to Read
        </p>
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Enter text above to preview"}</p>
      </div>
    </div>
  );
}
