import "./App.css";
import Navbar from "./Componants/Navbar";
import TextForm from "./Componants/TextForm"; 
function App() {
  return (
    <>
      <Navbar Title = "Home" Products = "Products" Contact = "Contact"  Feedback = "Feedback"/>
      
      <TextForm/>
    </>
  );
}

export default App;
