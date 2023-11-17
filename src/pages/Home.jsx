import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="categoryContainer">
        <div className="categories">
          <a href="/movie-category">Movie Trivia</a>
        </div>
        <div className="categories">
          <p>Music Trivia</p>
        </div>
        <div className="categories">
          <h1>General Trivia</h1>
          <p>Click here to play!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
