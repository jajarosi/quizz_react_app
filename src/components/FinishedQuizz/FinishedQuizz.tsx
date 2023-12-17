// components/FinishedQuiz.tsx
import React from 'react';
import './FinishedQuizz.css';

interface FinishedQuizProps {
    score: number;
    totalQuestions: number;
    handleRestartClick: () => void;
}

const FinishedQuiz: React.FC<FinishedQuizProps> = ({ score, totalQuestions, handleRestartClick }) => (
    <div className="finished-container">
        <p>Merci d'avoir terminé le quiz!</p>
        <p>Votre score est de {score}/{totalQuestions}</p>
        <button className="restart-button" onClick={handleRestartClick}>
            Recommencer
        </button>
    </div>
);

export default FinishedQuiz;
