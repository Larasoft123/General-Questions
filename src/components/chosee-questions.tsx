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


        for (const element of form) {
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
        <section className="w-full h-full flex justify-center  p-2 items-center ">


            <form onSubmit={handleSubmit} className="flex -translate-y-6 flex-col p-4 justify-center items-center" >

                <h3 className="text-xl text-indigo-700 font-semibold text-balance text-center">Selecciona los tipos de preguntas que quieres</h3>
                
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mt-6">
                    {Object.values(typeQuestions).map((value, index) => {
                        return (


                         <li key={index} className="w-full  border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center  ps-3">
                                <input id={value} name={value} type="checkbox" className="w-4 h-4 
                                cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>

                                <label htmlFor={value} className="w-full cursor-pointer py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
                            </div>
                        </li>

                            
                        )
                    })}

                </ul>

                <div className="mt-10 w-full max-w-70">

                    <button className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white font-semibold w-full transition ease-in duration-200 text-center text-base py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer">Continuar</button>

                </div>
            </form>



        </section>
    )

}