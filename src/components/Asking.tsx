
import { Question } from "../lib/types"
import { useQuestionsStore } from "../store/questionsStore"
import { NextButtons } from "./NextButtons"



function getBg({question,index}: {question: Question,index: number}) {
    const {correct,userAnswer} = question
    if (userAnswer == undefined) return "transparent"

    if (correct === index) return "bg-green-500"

    if (index === userAnswer) return "bg-red-500"

    return "transparent"
    
}

export function Asking() {
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const questions = useQuestionsStore(state => state.questions)
    const setUserAnswer = useQuestionsStore(state => state.setUserAnswer)


    

    const handleClick = (index: number) => () => {
        setUserAnswer(index)
    }

    return (
        <section className="w-full p-4 h-full flex items-center justify-center">

            <article>
                <h1 className="text-2xl text-center text-zinc-500 text-balance">{questions[currentQuestion].question}</h1>
                <div className="flex flex-col">
                    <header className="flex text-center py-4 px-2 justify-between items-center text-sm text-gray-700">
                             <NextButtons/>
                             <span> {currentQuestion+1}/ {questions.length}</span>


                             
                    </header>

                    <div className="">
                        <ul className="flex flex-col gap-4">
                            {questions[currentQuestion].answers.map((answer, index) => {

                                return (
                                    <li  key={index} className={`flex flex-col gap-2 text-center`}>
                                        <button onClick={handleClick(index)} className={`${getBg({index,question:questions[currentQuestion]})} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                            {answer}
                                        </button>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>


                </div>

            </article>
        </section>
    )

}