import React, { useState } from "react";
import Navbar from "./Componants/Navbar";
import Alearts from "./Componants/Alearts";
import TextForm from "./Componants/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Light or dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Dark mode disabled", "success");
    }
  };

  return (
    <>
      <Navbar item1="Home" mode={mode} toggleMode={toggleMode} />
      <Alearts alert={alert} />
      <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
