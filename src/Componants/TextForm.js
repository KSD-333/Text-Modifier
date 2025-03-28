import React, { useState, useRef } from "react";

export default function TextForm() {
  const [Text, setText] = useState(""); // State for input
  const textareaRef = useRef(null); // Ref for textarea

  // Function to convert text to UPPERCASE
  const Uppercase = () => {
    setText(Text.toUpperCase());
  };

  // Function to convert text to lowercase
  const Lowercase = () => {
    setText(Text.toLowerCase());
  };

  // Function to reverse text
  const Reverse = () => {
    setText(Text.split("").reverse().join(""));
  };

  // Function to clear text
  const Clear = () => {
    setText("");
  };

  // Function to copy text
  const copyToClipboard = () => {
    textareaRef.current.select(); // Select text
    navigator.clipboard.writeText(textareaRef.current.value)
      .then(() => console.log("Clipboard copied!")) // Copy to clipboard  
      .catch(err => console.error("Failed to copy:", err));
  };

  // Function to update state on text change
  const HandleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={Text}
          onChange={HandleChange}
          ref={textareaRef}
        ></textarea>
      </div>

      <button type="button" className="btn btn-primary mx-1" onClick={Uppercase}>
        Uppercase
      </button>
      <button type="button" className="btn btn-primary mx-1" onClick={Lowercase}>
        Lowercase
      </button>
      <button type="button" className="btn btn-primary mx-1" onClick={Clear}>
        Clear
      </button>
      <button type="button" className="btn btn-primary mx-1" onClick={Reverse}>
        Reverse
      </button>
      <button type="button" className="btn btn-primary mx-1" onClick={copyToClipboard}>
        Copy
      </button>

      <div className="container my-3">
        <p>{Text.split(" ").filter(word => word !== "").length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").filter(word => word !== "").length} Minutes Required to Read</p>
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Enter text above to preview"}</p>
      </div>
    </div>
  );
}
