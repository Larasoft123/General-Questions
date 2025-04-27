import { useQuestionsStore } from "../store/questionsStore"
import { GoNextIcon, GoBackIcon } from "../assets/icons/indexIcons"



export function NextButtons() {
    const GoNext = useQuestionsStore(state => state.GoNext)
    const GoBack = useQuestionsStore(state => state.GoBack)

    return (
        <>

            <div className="flex gap-8">
                <button aria-label="Ir a la pregunta anterior" role="button"  onClick={GoBack} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <GoBackIcon />
                </button>
                <button aria-label="ir a la pregunta siguiente" role="button"  onClick={GoNext} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <GoNextIcon />
                </button>
            </div>

        </>
    )

}