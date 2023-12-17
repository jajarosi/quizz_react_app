// import React, { useState } from 'react';
// import './App.css';

// interface Question {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// const App: React.FC = () => {
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [score, setScore] = useState<number>(0);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

// const questions: Question[] = [
//   {
//     question: 'Quelle est la capitale de la France ?',
//     options: ['Paris', 'Berlin', 'Londres', 'Madrid'],
//     correctAnswer: 'Paris',
//   },
//   {
//     question: 'Quelle est la couleur du ciel par temps clair ?',
//     options: ['Rouge', 'Vert', 'Bleu', 'Jaune'],
//     correctAnswer: 'Bleu',
//   },
//   {
//     question: 'Quelle est la plus grande planète du système solaire ?',
//     options: ['Mars', 'Jupiter', 'Venus', 'Neptune'],
//     correctAnswer: 'Jupiter',
//   },
//   {
//     question: 'Quel célèbre artiste a peint la Joconde ?',
//     options: [' Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Leonardo da Vinci'],
//     correctAnswer: 'Leonardo da Vinci',
//   },
//   {
//     question: 'Quel est le nom de la première femme à avoir remporté un prix Nobel ?',
//     options: ['Marie Curie', 'Amelia Earhart', 'Rosalind Franklin', 'Jane Goodall'],
//     correctAnswer: 'Marie Curie',
//   }
// ];

//   const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleNextClick = () => {
// if (selectedOption !== null) {
//   if (selectedOption === questions[currentQuestion].correctAnswer) {
//     setScore(score + 1);
//   }

//   if (currentQuestion < questions.length - 1) {
//     setCurrentQuestion(currentQuestion + 1);
//     setSelectedOption(null); // Réinitialise la sélection pour la nouvelle question
//   } else {
//     setQuizCompleted(true)
//   }
// } else {
//   alert("Veuillez sélectionner une réponse avant de passer à la question suivante.");
// }
//   };

//   const handlePreviewClick = () => {
// if (currentQuestion > 0) {
//   setCurrentQuestion(currentQuestion - 1);
//   setSelectedOption(null); // Réinitialise la sélection pour la nouvelle question
// }
//   };

//   const handleSubmitClick = () => {
// setQuizCompleted(true)
//   };

//   const handleRestartClick = () => {
// setQuizCompleted(false);
// setCurrentQuestion(0);
// setScore(0);
// setSelectedOption(null);
//   };

//   return (
//     <div className="app-container">
//       <h1>Quiz React TypeScript</h1>
//       {!quizCompleted && (
//         <>
//           <p className="question-counter">Question {currentQuestion + 1}/{questions.length}</p>
//           <p className="question-text">{questions[currentQuestion].question}</p>
//           <div className="options-container">
//             {questions[currentQuestion].options.map((option, index) => (
//               <div key={index} className="option-item">
//                 <input
//                   type="radio"
//                   id={`option${index}`}
//                   name="answer"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={handleAnswerChange}
//                 />
//                 <label htmlFor={`option${index}`}>{option}</label>
//               </div>
//             ))}
//           </div>
//           <div className="button-container">
//             <button className="preview-button" onClick={handlePreviewClick} disabled={currentQuestion === 0}>
//               Précédent
//             </button>
//             {currentQuestion === questions.length - 1 ? (
//               <button className="submit-button" onClick={handleSubmitClick} disabled={selectedOption === null}>
//                 Soumettre
//               </button>
//             ) : (
//               <button className="next-button" onClick={handleNextClick} disabled={selectedOption === null}>
//                 Suivant
//               </button>
//             )}
//           </div>
//         </>
//       )}
//       {quizCompleted && (
//         <div>
//           <p>Merci d'avoir terminé le quiz!</p>
//           <p>Votre score est de {score}/{questions.length}</p>
//           <button className="restart-button" onClick={handleRestartClick}>
//             Recommencer
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// components/Quiz.tsx
import React, { useState } from 'react';
import Question from '../components/Question/Question';
import ButtonContainer from '../components/ButtonContainer/ButtonContainer';
import FinishedQuiz from '../components/FinishedQuizz/FinishedQuizz'
import './App.css';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: 'Quelle est la capitale de la France ?',
    options: ['Paris', 'Berlin', 'Londres', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Quelle est la couleur du ciel par temps clair ?',
    options: ['Rouge', 'Vert', 'Bleu', 'Jaune'],
    correctAnswer: 'Bleu',
  },
  {
    question: 'Quelle est la plus grande planète du système solaire ?',
    options: ['Mars', 'Jupiter', 'Venus', 'Neptune'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Quel célèbre artiste a peint la Joconde ?',
    options: [' Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Leonardo da Vinci'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'Quel est le nom de la première femme à avoir remporté un prix Nobel ?',
    options: ['Marie Curie', 'Amelia Earhart', 'Rosalind Franklin', 'Jane Goodall'],
    correctAnswer: 'Marie Curie',
  }
];

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);


  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null); // Réinitialise la sélection pour la nouvelle question
      } else {
        setQuizCompleted(true)
      }
    } else {
      alert("Veuillez sélectionner une réponse avant de passer à la question suivante.");
    }
  };

  const handlePreviewClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Réinitialise la sélection pour la nouvelle question
    }
  };

  const handleSubmitClick = () => {
    setQuizCompleted(true)
  };

  const handleRestartClick = () => {
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  return (
    <div className='app-container'>
      <h1>Quiz React TypeScript</h1>
      {!quizCompleted && (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            selectedOption={selectedOption}
            handleAnswerChange={handleAnswerChange}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
          <ButtonContainer
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            selectedOption={selectedOption}
            handlePreviewClick={handlePreviewClick}
            handleNextClick={handleNextClick}
            handleSubmitClick={handleSubmitClick}
          />
        </>
      )}
      {quizCompleted && <FinishedQuiz score={score} totalQuestions={questions.length} handleRestartClick={handleRestartClick} />}
    </div>
  );
};

export default App;
