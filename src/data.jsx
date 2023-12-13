export const questions = [
    { question: "How can I improve my coding skills?", answers: [{ text: "Practice regularly.", upvotes: 0, downvotes: 0 }] },
    { question: "What are some good resources for career advice?", answers: [{ text: "LinkedIn Learning", upvotes: 0, downvotes: 0 }] },
    { question: "How do I prepare for a job interview?", answers: [{ text: "Research the company and practice common interview questions.", upvotes: 0, downvotes: 0 }] },
    { question: "What are the key skills for a software developer?", answers: [{ text: "Programming skills, problem-solving, and teamwork.", upvotes: 0, downvotes: 0 }] },
];

export function addQuestion(questionText) {
    questions.push({ question: questionText, answers: [] });
}

export function addAnswer(questionIndex, answerText) {
    questions[questionIndex].answers.push({ text: answerText, upvotes: 0, downvotes: 0 });
}

export function upvoteAnswer(questionIndex, answerIndex) {
    questions[questionIndex].answers[answerIndex].upvotes++;
}

export function downvoteAnswer(questionIndex, answerIndex) {
    questions[questionIndex].answers[answerIndex].downvotes++;
}
