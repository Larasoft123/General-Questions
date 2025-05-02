import { Question } from "./types.d"

export const  shuffleAnswers = ({question}: {question: Question}) => {
    const correctAnswer = question.answers[question.correct]
    const newAnswers = question.answers.sort(() => Math.random() - 0.5)
    const newCorrectAnswer = newAnswers.indexOf(correctAnswer)
    if (newCorrectAnswer === -1){
        return question
    } 
    
    return {
        ...question,
        answers: newAnswers,
        correct: newCorrectAnswer,  
    }
    
}