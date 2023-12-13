import React from 'react';
import './QuestionCard.css';

function QuestionCard({
    question,
    questionIndex,
    onAnswerSubmit,
    answerText,
    setAnswerText,
    upvoteAnswer,
    downvoteAnswer,
}) {
    return (
        <li className="question-card">
            <div className="question">
                <p>{question.question}</p>
            </div>
            <ul className="answers">
                {question.answers.map((answer, answerIndex) => (
                    <li key={answerIndex}>
                        <p>{answer.text}</p>
                        <button
                            className="upvote"
                            onClick={() => upvoteAnswer(questionIndex, answerIndex)}
                        >
                            Upvote
                        </button>
                        <button
                            className="downvote"
                            onClick={() => downvoteAnswer(questionIndex, answerIndex)}
                        >
                            Downvote
                        </button>
                        <span className="upvotes">{answer.upvotes}</span>
                        <span className="downvotes">{answer.downvotes}</span>
                    </li>
                ))}
            </ul>
            <div className="answer-input">
                <form onSubmit={(e) => onAnswerSubmit(e, questionIndex)}>
                    <input
                        type="text"
                        value={answerText}
                        onChange={(e) => setAnswerText(e.target.value)}
                        placeholder="Write your answer..."
                    />
                    <button type="submit">Submit Answer</button>
                </form>
            </div>
        </li>
    );
}

export default QuestionCard;
