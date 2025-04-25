import { useQuestionsStore } from "../store/questionsStore";

export function Footer() {
    const { questions } = useQuestionsStore()


    return (
        <footer className="flex justify-center gap-8 text-center items-center  text-xs   text-gray-700">
            <div className="text-indigo-700">
                Sin contestar: {questions.filter(q => q.userAnswer === undefined).length}/{questions.length}
            </div>
            
            <div className="text-emerald-700">
                Correctas: {questions.filter(q => q.userAnswer === q.correct).length}/{questions.length}
            </div>

            <div className="text-red-600">
                Incorrectas: {questions.filter(q => q.userAnswer !== undefined && q.userAnswer !== q.correct).length}/{questions.length}
            </div>

        </footer>
    )

}