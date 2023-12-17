// components/ButtonContainer.tsx
import React from 'react';
import './ButtonContainer.css';

interface ButtonContainerProps {
    currentQuestion: number;
    totalQuestions: number;
    selectedOption: string | null;
    handlePreviewClick: () => void;
    handleNextClick: () => void;
    handleSubmitClick: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
    currentQuestion,
    totalQuestions,
    selectedOption,
    handlePreviewClick,
    handleNextClick,
    handleSubmitClick,
}) => (
    <div className="button-container">
        <button className="preview-button" onClick={handlePreviewClick} disabled={currentQuestion === 0}>
            Précédent
        </button>
        {currentQuestion === totalQuestions - 1 ? (
            <button className="submit-button" onClick={handleSubmitClick} disabled={selectedOption === null}>
                Soumettre
            </button>
        ) : (
            <button className="next-button" onClick={handleNextClick} disabled={selectedOption === null}>
                Suivant
            </button>
        )}
    </div>
);

export default ButtonContainer;