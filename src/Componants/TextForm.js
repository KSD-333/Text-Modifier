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
    if (navigator.clipboard && window.isSecureContext) {
         navigator.clipboard.writeText(Text)
        .then(() => props.showAlert("Copied to clipboard!" , "success"))
        .catch((err) => console.error("Clipboard copy failed:", err));
    } else {
      
      const textArea = document.createElement("textarea");
      textArea.value = Text;
     
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
  
      try {
        const success = document.execCommand("copy");
        if (success) {
          alert("Copied to clipboard!");
        } else {
          alert("Failed to copy text.");
        }
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
  
      document.body.removeChild(textArea);
    }
  };

  const voice = () => {
    const speech = new SpeechSynthesisUtterance(Text);
    speech.lang = "en-US"; 
    speech.rate = 1; 
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
 

  
  

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
      <button className="btn btn-primary mx-1" onClick={voice}>Read </button>

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
