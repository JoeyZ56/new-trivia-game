import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Astronomy from "./pages/Astronomy";
import CountryMusic from "./pages/CountryMusic";
import Football from "./pages/Football";
import Nature from "./pages/Nature";
import FourLetterWords from "./pages/FourLetterWords";
import History from "./pages/History";
import PopMusic from "./pages/PopMusic";
import TheBible from "./pages/TheBible";
import TheOlympics from "./pages/TheOlympics";
import Trivia from "./pages/Trivia";
import USCities from "./pages/USCities";
import "./App.css";

function App() {
  return (
    <div className="routesContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/astronomy" element={<Astronomy />} />
          <Route path="/country-music" element={<CountryMusic />} />
          <Route path="/football" element={<Football />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/four-letter-words" element={<FourLetterWords />} />
          <Route path="/history" element={<History />} />
          <Route path="/pop-music" element={<PopMusic />} />
          <Route path="/the-bible" element={<TheBible />} />
          <Route path="/the-olympics" element={<TheOlympics />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/us-cities" element={<USCities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
