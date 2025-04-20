
import { useQuestionsStore } from "../store/questionsStore"
import { Reset } from "./reset"


export function Finish() {

    const win = useQuestionsStore(state => state.win)
    const questions = useQuestionsStore(state => state.questions)
    


    const message = win ? "felicidades superaste la prueba" : "Esfuerzate más, no contestaste bien la mitad de las preguntas"

    return (
        <>
            {win !== null && <section className="px-4  text-center py-90 ">


                <h1 className={` text-3xl text-balance mb-8 text-teal-700`}> {message} </h1>

                <h5 className="text-lg">{questions.filter((q) => q.userAnswer !== undefined && q.userAnswer !== q.correct).length}/{questions.length} Preguntas incorrectas</h5>


                <div className="p-4 flex justify-center max-w-md items-center mx-auto">
                    <Reset />
                </div>
            </section>
            }

        </>
    )

}