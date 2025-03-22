import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home/Home";
import AddSubscriber from "./pages/AddSubscriber/AddSubscriber";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-subscriber" element={<AddSubscriber />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
