import { useState, useEffect } from "react";
import Footer from "../Footer";

const MovieTrivia = () => {
  const [trivia, setTrivia] = useState("");
  const [triviaQuestion, setTriviaQuestion] = useState("");
  const [triviaAnswer, setTriviaAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleMovies1 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[1].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies2 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[2].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies3 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[3].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies4 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[4].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies5 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[5].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies6 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[6].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies7 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = catOne.clues[7].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies8 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[8].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };
  const handleMovies9 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const triviaQuestion = data.clues[9].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };

  const handleAnswer = async (e) => {
    e.preventDefault();
    const res = await fetch("https://jservice.io/api/category?id=102");
    const data = await res.json();
    setTrivia(data);

    if (triviaAnswer === data.clues[1].answer) {
      console.log("correct");
      setScore(score + 100);
    } else {
      console.log("incorrect");
    }
  };

  return (
    <>
      <div className="headerContainer">
        <h2 className="text-3xl">Movies</h2>
        <div className="text-3xl">{score}</div>
      </div>

      <div className="categoryContainer">
        <button onClick={handleMovies1} className="board">
          100
        </button>
        <button onClick={handleMovies2} className="board">
          200
        </button>
        <button onClick={handleMovies3} className="board">
          300
        </button>

        <button onClick={handleMovies4} className="board">
          400
        </button>
        <button onClick={handleMovies5} className="board">
          500
        </button>
        <button onClick={handleMovies6} className="board">
          600
        </button>
        <button onClick={handleMovies7} className="board">
          700
        </button>
        <button onClick={handleMovies8} className="board">
          800
        </button>
        <button onClick={handleMovies9} className="board">
          900
        </button>
      </div>

      <div className="flex justify-center mt-[80px]">
        <p className="text-xl">{triviaQuestion}</p>
      </div>
      <div className="flex justify-center mt-2">
        <form className="flex flex-col">
          <input type="text" placeholder="Answer" className="input" />
          <button onClick={handleAnswer} className="inputBtn">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-2">
        <Footer />
      </div>
    </>
  );
};

export default MovieTrivia;
