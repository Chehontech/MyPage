import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import TestPage from "./pages/TestPage.Jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
