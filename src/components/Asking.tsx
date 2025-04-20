
import { useQuestionsStore } from "../store/questionsStore"
import { NextButtons } from "./NextButtons"
import { Footer } from "./Footer"
import { QuestionSelect } from "./question-select"



export function Asking() {
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const questions = useQuestionsStore(state => state.questions)




 
    return (
        <section className="w-full p-4 h-full flex items-center justify-center">

            <article>
                <h1 className="text-2xl text-center text-zinc-500 text-balance">{questions[currentQuestion].question}</h1>
                <div className="flex flex-col">
                    <header className="flex text-center py-4 px-2 justify-between items-center text-sm text-gray-700">
                        <NextButtons />
                        <span> {currentQuestion + 1}/ {questions.length}</span>



                    </header>

                    <div className="">
                        <ul className="flex flex-col gap-4">
                            {questions[currentQuestion].answers.map((answer, index) => {
                                return (
                                    <QuestionSelect key={index} answer={answer} index={index} />
                                )
                            })}

                        </ul>
                    </div>


                    <div className="py-8">
                        <Footer />
                    </div>

                </div>

            </article>
        </section>
    )

}