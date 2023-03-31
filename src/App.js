import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import BookingPage from "./components/BookingPage.js";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation-page" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
