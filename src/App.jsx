import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieCategory from "./pages/MovieCategory";
import "./App.css";

function App() {
  return (
    <div className="routesContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-category" element={<MovieCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
