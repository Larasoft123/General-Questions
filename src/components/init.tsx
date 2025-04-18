import { optionsInit } from "../lib/utils.d"
import { useQuestionsStore } from "../store/questionsStore"


export function Init() {

    const setQuestions  = useQuestionsStore(state=> state.setQuestions)

    const handleSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
        eve.preventDefault()

        const nroQuestions = Number((eve.currentTarget.children[1] as HTMLSelectElement).value)


        if (nroQuestions < 1 || typeof nroQuestions !== 'number') return;


        setQuestions(nroQuestions)
    }





    return (
        <div className='w-full h-full -translate-y-20  p-4 relative flex-col flex justify-center items-center my-6'>
            <h1 className="font-semibold mb-12 text-4xl text-indigo-700 opacity-95 text-center text-balance">Cuanto sabes de capitales del mundo</h1>

            <form onSubmit={handleSubmit} className="flex w-full flex-col text-center justify-center items-center">
                <label htmlFor="numero-paises" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona cuantas preguntas quieres</label>
                <select id="numero-paises" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {optionsInit.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>

                <button type="submit" className="mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white font-semibold w-full transition ease-in duration-200 text-center text-base py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer">Empezar</button>
            </form>

        </div>
    )
}