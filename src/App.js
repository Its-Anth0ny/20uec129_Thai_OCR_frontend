import React from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../src/App.css"
import Home from "./Home";  
import Details from "./Details";
import Submit from "./Submit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/submit" element={<Submit />} />
      </Routes>
      </BrowserRouter>
   )
}

export default App;