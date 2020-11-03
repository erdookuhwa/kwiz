import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from "./firebase";
import Questions from './Questions';
import Quizzes from './Quizzes';


function App() {

  // Set states for dynamically updating values
  const [currentQ, setCurrentQ] = useState(0)   // manages state for the current question user is attempting
  const [finalScore, setFinalScore] = useState(false)   // manages logic responsible for displaying the score at the end of the quiz
  const [score, setScore] = useState(0)   // managing scoreboard for each correct question

  // // define states for loading quizzes
  // const [quizzes, setQuizzes] = useState([])
  // const [loading, setLoading] = useState(false)

  // make reference call to db in firestore, specifically to the questions inside quizzes collection
  const ref = firebase.firestore().collection("quizzes/CD5sniFI8JWDZFUQmQC7/questions");
  
  // writing function to get data in quizzes-> questions collection,
  // function getQuizzes() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setQuizzes(items);
  //     setLoading(false)
  //   });
  // }

  // useEffect(() => {
  //   getQuizzes();
  // }, [])

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }


  // const questions = [
  //   {
  //     questionText: "Who is the president of the United States?",
  //     answerOptions: [
  //       {answerText: 'Donald J. Trump', isCorrect: true},
  //       {answerText: 'Donut Rump', isCorrect: false},
  //       {answerText: 'Joe Biden', isCorrect: false},
  //       {answerText: 'Hilary Clinton', isCorrect: false}
  //     ],
  //   },
  //   {
  //     questionText: "How many days are in a year?",
  //     answerOptions: [
  //       {answerText: '465', isCorrect: false},
  //       {answerText: '395', isCorrect: false},
  //       {answerText: '256', isCorrect: false},
  //       {answerText: '365', isCorrect: true}
  //     ],
  //   }
  // ]

  // make function to go to the next question
  // const handleGetNextQuestion = (isCorrect) => {
  //   if (isCorrect == true) {
  //     setScore(score + 1)
  //   }
  //   const nextQuestion = currentQ + 1
  //   if (nextQuestion < questions.length) {
  //     setCurrentQ(nextQuestion)   // reset state for managing current question
  //   } else {
  //     setFinalScore(true)   // reset the state managing logic for displaying the final score at the end of the game
  //   }
    
  // }

  // let questionElems = questions.map((q) => <Questions {...q} />)


  return (
    <div>
      <h1 className="App">Kweez</h1>
      {/* {questionElems} */}
      <Quizzes />

      {/* To see question in quizzes collection */}
      {/* {quizzes.map((q) => (
        <div>
          <h2>{{q.questions}.map((qz) => (
            qz.question
          )}</h2>
      )} */}





      {/* {finalScore ? (
        <div className="score-section">You scored {score} out of {questions.length} <br/>
          <button>Play Again</button>
        </div>
        ) : (
          <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQ].questionText}</div>
          </div>
          <div className="answer-section"> 
            {questions[currentQ].answerOptions.map((ans) => <button onClick={() => handleGetNextQuestion(ans.isCorrect)}>{ans.answerText}</button>)}
          </div>
          </>
        )
      } */}
    </div>
  );
}

export default App;
