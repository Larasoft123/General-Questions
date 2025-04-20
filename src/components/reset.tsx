import { useQuestionsStore } from "../store/questionsStore";

export function Reset(){
    const reset = useQuestionsStore(state => state.reset)

    return (
        <button onClick={reset} className="bg-sky-600 hover:bg-sky-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            Reiniciar
        </button>
    )
}