import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="categoryContainer">
        <div className="categories">
          <a href="/movies">Movie Trivia</a>
        </div>
        <div className="categories">
          <a href="/pop-music">Pop Music Trivia</a>
        </div>
        <div className="categories">
          <a href="country-music">Country Music Trivia</a>
        </div>
        <div className="categories">
          <a href="/astronomy">Astronomy Trivia</a>
        </div>
        <div className="categories">
          <a href="/nature">Nature Trivia</a>
        </div>
        <div className="categories">
          <a href="four-letter-words">Four Letter Words Trivia</a>
        </div>
        <div className="categories">
          <a href="/football">Football Trivia</a>
        </div>
        <div className="categories">
          <a href="/the-olympics">The Olympics Trivia</a>
        </div>
        <div className="categories">
          <a href="/us-cities">U.S Cities Trivia</a>
        </div>
        <div className="categories">
          <a href="/the-bible">The Bible Trivia</a>
        </div>
        <div className="categories">
          <a href="/history">History Trivia</a>
        </div>
        <div className="categories">
          <a href="/trivia">General Trivia</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
