import { create } from 'zustand'
import { questionsArray } from '../lib/utils.d'
import { Question,App_status } from '../lib/types.d'


interface QuestionsStore {
    currentQuestion: number
    questions: Question[]
    App_status: App_status;
    setQuestions: (nroQuestions: number) => void,
    setUserAnswer: (answer: number) => void,
    GoNext: () => void,
    GoBack: () => void,
}

export const useQuestionsStore = create<QuestionsStore>((set,get) => ({
    currentQuestion: 0,
    questions: [],
    App_status: App_status.INIT,


    setQuestions(nroQuestions: number) {
       

        const newQuestions = structuredClone(questionsArray).sort(()=> Math.random() - 0.5).slice(0, nroQuestions)


      
        // setear el array questions con el numero de preguntas que se le pase y hacerlo al azar
        set({
            questions: newQuestions,
            App_status: App_status.ASKING,
        })
       


        

    },


    setUserAnswer(answer: number) {
        const question = get().questions[get().currentQuestion]
        question.userAnswer = answer

        
        
        set({
            questions: get().questions.map((q,index)=> {
                return index === get().currentQuestion ? question : q
            })
        })


     
        
    },
   
    GoNext(){
        if (get().currentQuestion == get().questions.length - 1) return;
        set({currentQuestion: get().currentQuestion + 1})

    },

    GoBack(){
        if (get().currentQuestion == 0) return;
        set({currentQuestion: get().currentQuestion - 1})
    },



}))
