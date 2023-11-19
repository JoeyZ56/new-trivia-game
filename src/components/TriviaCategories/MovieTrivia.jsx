import { useState, useEffect } from "react";
import Footer from "../Footer";

const MovieTrivia = () => {
  const [trivia, setTrivia] = useState("");
  const [triviaQuestion, setTriviaQuestion] = useState("");
  const [triviaAnswer, setTriviaAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    try {
      const res = await fetch("https://jservice.io/api/category?id=102");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      const randomeIndex = Math.floor(Math.random() * data.clues.length);
      const currentQuestion = data.clues[randomeIndex].question;
      const currentAnswer = data.clues[randomeIndex].answer;

      setTriviaQuestion(currentQuestion);
      setTriviaAnswer(currentAnswer);
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleMovies = async () => {
    const randomeIndex = Math.floor(Math.random() * trivia.clues.length);
    const currentQuestion = trivia.clues[randomeIndex].question;
    const currentAnswer = trivia.clues[randomeIndex].answer;
    console.log(trivia);
    setTriviaQuestion(currentQuestion);
    setTriviaAnswer(currentAnswer);
  };

  const handleAnswer = async (e) => {
    e.preventDefault();

    if (userInput.trim().toLowerCase() === triviaAnswer.trim().toLowerCase()) {
      setScore(score + 100);

      fetchQuestions();
    } else {
      console.log("wrong answer");
    }
    setUserInput("");
  };

  return (
    <>
      <div className="headerContainer">
        <h2 className="text-3xl">Movies</h2>
        <div className="text-3xl">{score}</div>
      </div>

      <div className="categoryContainer">
        <button onClick={handleMovies} className="board">
          100
        </button>
        <button onClick={handleMovies} className="board">
          200
        </button>
        <button onClick={handleMovies} className="board">
          300
        </button>

        <button onClick={handleMovies} className="board">
          400
        </button>
        <button onClick={handleMovies} className="board">
          500
        </button>
        <button onClick={handleMovies} className="board">
          600
        </button>
        <button onClick={handleMovies} className="board">
          700
        </button>
        <button onClick={handleMovies} className="board">
          800
        </button>
        <button onClick={handleMovies} className="board">
          900
        </button>
      </div>

      <div className="flex justify-center mt-[80px]">
        <p className="text-xl">{triviaQuestion}</p>
      </div>
      <div className="flex justify-center mt-2">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Answer"
            className="input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div>
            <button onClick={handleAnswer} className="inputBtn">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex mt-2 ml-2">
        <Footer />
      </div>
    </>
  );
};

export default MovieTrivia;
