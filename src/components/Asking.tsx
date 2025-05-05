
import { useQuestionsStore } from "../store/questionsStore"
import { NextButtons } from "./NextButtons"
import { Footer } from "./Footer"
import { QuestionSelect } from "./question-select"



export function Asking() {
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const questions = useQuestionsStore(state => state.questions)
    const reset = useQuestionsStore(state => state.reset)





    return (
        <section className="w-full p-4 h-full overflow-y-scroll  relative flex items-center justify-center">





            <article  className="overflow-y-scroll">
                <h1 className="text-xl pt-24 lg:pt-0 text-center text-zinc-500 text-balance">{questions[currentQuestion].question}</h1>
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


                    <div className="py-2">
                        <div className="flex py-4 justify-center items-center">
                            <p className="text-sm font-semibold text-balance text-sky-500">{questions[currentQuestion].level ?? null} </p>
                        </div>


                        <Footer />


                        <div className={`${questions[currentQuestion].description === undefined ? 'hidden' : ''} mt-16 cursor-pointer  relative border-base-300 collapse border`}>
                            <input type="checkbox" className="peer" disabled={questions[currentQuestion].userAnswer === undefined} />

                            <div
                                className="collapse-title text-xl font-medium bg-blue-500 text-primary-content peer-disabled:bg-neutral-500 peer-checked:bg-indigo-600/75 peer-checked:text-secondary-content"
                            >
                                Descripción
                            </div>

                            <div
                                className={`${questions[currentQuestion].userAnswer === undefined ? 'hidden' : ''} collapse-content   peer-checked:bg-indigo-600/75 peer-checked:text-secondary-content`}
                            >
                                <p className={` text-balance text-xl text-center`}> {questions[currentQuestion].description} </p>
                            </div>

                        </div>


                        <div className="mt-20">
                            <button className="bg-sky-600 hover:bg-sky-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={reset}>Reiniciar</button>
                        </div>

                    </div>

                </div>

            </article>
        </section>
    )

}






