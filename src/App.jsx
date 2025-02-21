import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBox from "./components/pages/AddBox";
import ListBoxes from "./components/pages/ListBoxes";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddBox />} />
          <Route path="/list" element={<ListBoxes />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
