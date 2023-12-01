import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const TheBible = () => {
  const [trivia, setTrivia] = useState("");
  const [triviaQuestion, setTriviaQuestion] = useState("");
  const [triviaAnswer, setTriviaAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const fetchQuestions = async () => {
    try {
      const res = await fetch("https://jservice.io/api/category?id=11");
      const data = await res.json();
      setTrivia(data);
      console.log(data);

      setTriviaQuestion("");
      setTriviaAnswer("");
    } catch (error) {
      console.log("failed to fetch question", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleMovies = async (points) => {
    const randomeIndex = Math.floor(Math.random() * trivia.clues.length);
    const currentQuestion = trivia.clues[randomeIndex].question;
    const currentAnswer = trivia.clues[randomeIndex].answer;
    console.log(trivia);

    setTriviaQuestion(currentQuestion);
    setTriviaAnswer(currentAnswer);
    setCurrentPoints(points);
    console.log("button clicked - points", points);
  };

  const clearMessage = () => {
    setCorrectAnswer("");
    setWrongAnswer("");
  };

  const handleAnswer = async (e) => {
    e.preventDefault();

    const userAnswer = userInput.trim().toLowerCase();
    const correctAnswerWithoutHTML = triviaAnswer
      .replace(/<\/?i>/g, "")
      .trim()
      .toLowerCase();

    console.log("Before Setting Messages:");
    console.log("Correct Answer:", correctAnswerWithoutHTML);
    console.log("Wrong Answer:", wrongAnswer);

    if (userAnswer === correctAnswerWithoutHTML) {
      console.log("correct answer - adding points:", currentPoints);
      const newScore = score + currentPoints;
      setScore(newScore);

      if (newScore >= 3000) {
        setIsGameOver(true);
      } else {
        fetchQuestions();
        console.log(score);
        setCorrectAnswer("Correct Answer!");
        setTimeout(clearMessage, 2000);
      }
    } else {
      console.log("wrong answer");
      setWrongAnswer("Wrong Answer, Try Again!");
      setTimeout(clearMessage, 2000);
    }

    console.log("After Setting Messages:");
    console.log("Correct Answer:", correctAnswerWithoutHTML);
    console.log("Wrong Answer:", wrongAnswer);

    setUserInput("");
  };

  return (
    <>
      {isGameOver ? (
        <div className="win-screen">
          <h1 className="text-5xl">YOU WIN!</h1>
          <h2 className="text-3xl ">You smarty pants!!!</h2>
          <h2 className="text-3xl ">Score: {score}</h2>
          <img
            className="w-[250px]"
            src="https://media.tenor.com/oXhMTmig_EEAAAAj/no1-happy.gif"
          />
          <a href="/" className="endGameHomeLink">
            Pick a new Categoriy
          </a>
        </div>
      ) : (
        <>
          <div className="headerContainer">
            <h2 className="text-3xl">The Bible</h2>
            <div className="text-3xl">{score}</div>
          </div>

          <div className="categoryContainer">
            <button onClick={() => handleMovies(100)} className="board">
              100
            </button>
            <button onClick={() => handleMovies(200)} className="board">
              200
            </button>
            <button onClick={() => handleMovies(300)} className="board">
              300
            </button>

            <button onClick={() => handleMovies(400)} className="board">
              400
            </button>
            <button onClick={() => handleMovies(500)} className="board">
              500
            </button>
            <button onClick={() => handleMovies(600)} className="board">
              600
            </button>
            <button onClick={() => handleMovies(700)} className="board">
              700
            </button>
            <button onClick={() => handleMovies(800)} className="board">
              800
            </button>
            <button onClick={() => handleMovies(900)} className="board">
              900
            </button>
          </div>

          <div className="flex justify-center mt-[80px]">
            <p className="text-xl max-sm: text-center px-3">{triviaQuestion}</p>
          </div>
          {correctAnswer && (
            <div className="flex justify-center mt-2">
              <h2 className="text-xl text-green-500">{correctAnswer}</h2>
            </div>
          )}
          {wrongAnswer && (
            <div className="flex justify-center mt-2">
              <h2 className="text-xl text-red-500">{wrongAnswer}</h2>
            </div>
          )}

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
      )}
    </>
  );
};

export default TheBible;
