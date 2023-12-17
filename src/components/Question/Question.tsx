// components/Question.tsx
import React from 'react';
import './Question.css';

interface QuestionProps {
    question: string;
    options: string[];
    selectedOption: string | null;
    currentQuestion: number
    totalQuestions: number
    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, selectedOption, handleAnswerChange, currentQuestion, totalQuestions }) => (
    <div>
        <p className="question-counter">Question {currentQuestion + 1}/{totalQuestions}</p>
        <p className="question-text">{question}</p>
        <Options
            options={options}
            selectedOption={selectedOption}
            handleAnswerChange={handleAnswerChange}
        />
    </div>
);

interface OptionsProps {
    options: string[];
    selectedOption: string | null;
    handleAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Options: React.FC<OptionsProps> = ({ options, selectedOption, handleAnswerChange }) => (
    <div className="options-container">
        {options.map((option, index) => (
            <div key={index} className="option-item">
                <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleAnswerChange}
                />
                <label htmlFor={`option${index}`}>{option}</label>
            </div>
        ))}
    </div>
);

export default Question;
