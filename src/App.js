import "./App.css";
import Inflowoutflow from "./pages/Inflowoutflow";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inflow-outflow" element={<Inflowoutflow />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
