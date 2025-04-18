import { useQuestionsStore } from "../store/questionsStore"

export function Finish() {

    const win = useQuestionsStore(state => state.win)
    

    const message = win ? "felicidades superaste la prueba" : "Esfuerzate más, no contestaste bien la mitad de las preguntas"

    return (
        <>
            {win !== null && <div className="flex px-4 justify-center text-center items-center w-full h-full">
                <h1 className={`-translate-y-12 text-3xl text-balance text-teal-700`}> {message} </h1>
            </div>
            }
        </>
    )

}