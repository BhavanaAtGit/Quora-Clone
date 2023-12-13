import React, { useState } from 'react';
import { questions, addQuestion, addAnswer, upvoteAnswer, downvoteAnswer } from './data';
import QuestionCard from './QuestionCard';
import './App.css';

function App() {
    const [questionText, setQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');

    const handleQuestionSubmit = (event) => {
        event.preventDefault();
        if (questionText.trim() !== '') {
            addQuestion(questionText);
            setQuestionText('');
        }
    };

    const handleAnswerSubmit = (event, questionIndex) => {
        event.preventDefault();
        if (answerText.trim() !== '') {
            addAnswer(questionIndex, answerText);
            setAnswerText('');
        }
    };

    // const fetchAPI = async () => {
    //   await fetch("https://654530755a0b4b04436dcaef.mockapi.io/mock/one/test").then(
    //     (response) => {console.log(response.body);}
    //   )
    // }

    return (
        <div>
            <header>
                <h1>Guidance Hub - Q&A Platform</h1>
                {/* <button onClick={fetchAPI}>Me API hu</button> */}
            </header>
            <main>
                <section id="ask-question">
                    <h2>Ask a Question</h2>
                    <form onSubmit={handleQuestionSubmit}>
                        <input
                            type="text"
                            value={questionText}
                            onChange={(e) => setQuestionText(e.target.value)}
                            placeholder="Type your question..."
                        />
                        <button type="submit">Ask</button>
                    </form>
                </section>
                <section id="question-list">
                    <h2>Recent Questions</h2>
                    <ul>
                        {questions.map((question, questionIndex) => (
                            <QuestionCard
                                key={questionIndex}
                                question={question}
                                questionIndex={questionIndex}
                                onAnswerSubmit={handleAnswerSubmit}
                                answerText={answerText}
                                setAnswerText={setAnswerText}
                                upvoteAnswer={upvoteAnswer}
                                downvoteAnswer={downvoteAnswer}
                            />
                        ))}
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Guidance Hub</p>
            </footer>
        </div>
    );
}

export default App;

