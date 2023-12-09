import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="categoryContainer">
        <a href="/movies" className="categories">
          Movie Trivia
        </a>

        <a href="/pop-music" className="categories">
          Pop Music Trivia
        </a>

        <a href="country-music" className="categories">
          Country Music Trivia
        </a>

        <a href="/astronomy" className="categories">
          Astronomy Trivia
        </a>

        <a href="/nature" className="categories">
          Nature Trivia
        </a>

        <a href="four-letter-words" className="categories">
          Four Letter Words Trivia
        </a>

        <a href="/football" className="categories">
          Football Trivia
        </a>

        <a href="/the-olympics" className="categories">
          The Olympics Trivia
        </a>

        <a href="/us-cities" className="categories">
          U.S Cities Trivia
        </a>

        <a href="/the-bible" className="categories">
          The Bible Trivia
        </a>

        <a href="/history" className="categories">
          History Trivia
        </a>

        <a href="/trivia" className="categories">
          General Trivia
        </a>
      </div>
    </div>
  );
};

export default Home;
