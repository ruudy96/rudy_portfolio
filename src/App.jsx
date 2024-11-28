import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Content />} />
        </Routes>
      </Router>
  );
}
