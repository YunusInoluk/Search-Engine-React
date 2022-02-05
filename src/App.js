import { LandingPage } from "./pages/LandingPage";
import { ResultPage } from "./pages/ResultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center ">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/show-more" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
