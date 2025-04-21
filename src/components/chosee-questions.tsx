import { useRef } from "react"
import { typeQuestions } from "../lib/types.d"
import { toast } from "sonner"
import { useQuestionsStore } from "../store/questionsStore"

export function ChooseQuestions() {
    const isSomeChecked = useRef(false)

    const setQuestionsType = useQuestionsStore(state => state.setQuestionsType)

    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        const types: string[] = []


        for(const element of form) {
            if (element instanceof HTMLInputElement && element.checked) {
                isSomeChecked.current = true   
                types.push(element.id) 
            }
        }

        if (!isSomeChecked.current) {
            toast.error("Debes seleccionar al menos un tipo de pregunta")
            return
        }

        setQuestionsType(types)

    }

    return (
        <section className="w-full h-full  p-4 items-center my-6">


            <form onSubmit={handleSubmit} className="flex flex-col p-4 justify-center items-center" >

                <h3 className="text-xl text-indigo-700 text-balance text-center">Selecciona los tipos de preguntas que quieres</h3>

                <div className="mt-6">
                    {Object.values(typeQuestions).map((value, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center my-2">
                                <input  type="checkbox" id={value} name={value} className="mr-2 rounded-full" />
                                <label htmlFor={value} className="text-lg text-balance">{value}</label>
                            </div>
                        )
                    })}




                </div>

                <div className="flex justify-center mt-10 items-center">

                    <button className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white font-semibold w-full transition ease-in duration-200 text-center text-base py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer">Continuar</button>

                </div>
            </form>



        </section>
    )

}