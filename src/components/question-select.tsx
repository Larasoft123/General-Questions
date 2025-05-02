import { Question } from "../lib/types"
import { useQuestionsStore } from "../store/questionsStore"

function getBg({ question, index }: { question: Question, index: number }) {
    const { correct, userAnswer } = question
    if (userAnswer == undefined) return "transparent"

    if (correct === index) return "bg-green-500"

    if (index === userAnswer) return "bg-red-500"

    return "transparent"

}


export function QuestionSelect({answer,index} : {answer: string, index: number}) {

        const currentQuestion = useQuestionsStore(state => state.currentQuestion)
        const questions = useQuestionsStore(state => state.questions)
        const setUserAnswer = useQuestionsStore(state => state.setUserAnswer)
    
    
    
    
        const handleClick = (index: number) => () => {
            const question = questions[currentQuestion]

            // si es correcta reproducir sonido de correcto
            if (question.correct === index) {
                const url = "src/assets/sounds/correct.mp3"
                const audio = new Audio(url)
                audio.volume = 1
                audio.play()
            }

            // si es incorrecta reproducir sonido de incorrecto
            if (question.correct !== index) {
                const url = "src/assets/sounds/incorrect.mp3"
                const audio = new Audio(url)
                audio.volume = 0.6
                audio.play()
            }


            setUserAnswer(index)
        }
    


    return (
        <>
            <li className={`flex flex-col gap-2 text-center`}>
                <button disabled={questions[currentQuestion].userAnswer !== undefined} onClick={handleClick(index)} className={`${getBg({ index, question: questions[currentQuestion] })} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white cursor-pointer dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                    {answer}
                </button>
            </li>

        </>
    )
}