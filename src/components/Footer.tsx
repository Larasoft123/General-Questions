import { useQuestionsStore } from "../store/questionsStore";

export function Footer() {
    const { questions } = useQuestionsStore()


    return (
        <footer className="flex justify-center gap-8 items-center  text-xs   text-gray-700">
            <div>
                Correctas: {questions.filter(q => q.userAnswer === q.correct).length}/{questions.length}
            </div>
            
            <div>
                Incorrectas: {questions.filter(q => q.userAnswer !== undefined && q.userAnswer !== q.correct).length}/{questions.length}
            </div>

        </footer>
    )

}