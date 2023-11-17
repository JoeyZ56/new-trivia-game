import { useState, useEffect } from "react";
import Footer from "./Footer";

const MovieTrivia = () => {
  const [trivia, setTrivia] = useState([]);
  const [triviaQuestion, setTriviaQuestion] = useState("");
  const [triviaAnswer, setTriviaAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleMovies1 = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[1].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[2].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[3].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[4].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[5].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[6].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[8].question;
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
      const catOne = await res.json();
      setTrivia(catOne);
      console.log(catOne);

      const triviaQuestion = catOne.clues[9].question;
      console.log(triviaQuestion);
      setTriviaQuestion(triviaQuestion);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };

  const handleAnswer = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("https://jservice.io/api/category?id=102");
      const catOne = await res.json();
      setTrivia(catOne);

      if (triviaAnswer === catOne.clues[1].answer) {
        setScore(score + 100);
      } else if (triviaAnswer === catOne.clues[2].answer) {
        setScore(score + 200);
      } else if (triviaAnswer === catOne.clues[3].answer) {
        setScore(score + 300);
      } else if (triviaAnswer === catOne.clues[4].answer) {
        setScore(score + 400);
      } else if (triviaAnswer === catOne.clues[5].answer) {
        setScore(score + 500);
      } else if (triviaAnswer === catOne.clues[6].answer) {
        setScore(score + 600);
      } else if (triviaAnswer === catOne.clues[7].answer) {
        setScore(score + 700);
      } else if (triviaAnswer === catOne.clues[8].answer) {
        setScore(score + 800);
      } else if (triviaAnswer === catOne.clues[9].answer) {
        setScore(score + 900);
      } else if (triviaAnswer !== catOne.clues[1].answer) {
        return (
          <div>
            <h1>Wrong Answer</h1>
          </div>
        );
      }
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <>
      <h2 className="flex justify-center text-3xl mt-2">Movies</h2>
      <div className="mr-3 text-xl flex flex-row-reverse ">{score}</div>

      <div className="grid grid-cols-3 gap-1 mt-10 place-items-center">
        <button
          onClick={handleMovies1}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          100
        </button>
        <button
          onClick={handleMovies2}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          200
        </button>
        <button
          onClick={handleMovies3}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          300
        </button>

        <button
          onClick={handleMovies4}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          400
        </button>
        <button
          onClick={handleMovies5}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          500
        </button>
        <button
          onClick={handleMovies6}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          600
        </button>
        <button
          onClick={handleMovies7}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          700
        </button>
        <button
          onClick={handleMovies8}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          800
        </button>
        <button
          onClick={handleMovies9}
          className="h-20 w-[200px] bg-blue-500 text-white font-bold rounded-lg"
        >
          900
        </button>
      </div>

      <div className="flex justify-center mt-[80px]">
        <p className="text-xl">{triviaQuestion}</p>
      </div>
      <div className="flex justify-center mt-[100px]">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Answer"
            className="w-[350px] h-[35px] border-[1px] border-black text-center p-2"
          />
          <button onClick={handleAnswer} className="inputBtn">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-[200px]">
        <Footer />
      </div>
    </>
  );
};

export default MovieTrivia;
