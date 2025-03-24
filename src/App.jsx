import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import "./App.css";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
