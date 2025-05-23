import { create } from "zustand";
import { totalQuestions } from "../lib/utils";
import { Question, App_status } from "../lib/types.d";
import confetti from "canvas-confetti";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { shuffleAnswers } from "../lib/shuffleAnswers";

interface QuestionsStore {
  currentQuestion: number;
  questions: Question[];
  App_status: App_status;
  selectedTypesQuestions: string[] | null;
  setQuestions: (nroQuestions: number) => void;
  setUserAnswer: (answer: number) => void;
  setQuestionsLevel: (levels: string[]) => void;
  setQuestionsType: (types: string[]) => void;
  GoNext: () => void;
  GoBack: () => void;
  checkWin: () => void;
  win: boolean | null;
  reset: () => void;
}

function DoConffeti() {
  const end = Date.now() + 15 * 1000;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export const useQuestionsStore = create<QuestionsStore>()(
  persist(
    devtools((set, get) => ({
      // estados de la store
      currentQuestion: 0,
      questions: [],
      App_status: App_status.CHOSE_TYPE_QUESTIONS,
      win: null,
      selectedTypesQuestions: null,
      // fin estados de la store


      // funciones de la store
      setQuestions(nroQuestions: number) {
        const questionsArray = get().questions;
        const newQuestions = questionsArray
          .sort(() => Math.random() - 0.5)
          .slice(0, nroQuestions)
          .map((question) => shuffleAnswers({question}))

        // setear el array questions con el numero de preguntas que se le pase y hacerlo al azar
        console.log({newQuestions})
        set({
          questions: newQuestions,
          App_status: App_status.ASKING,
        });
      },

      setQuestionsType(types: string[]) {
        if (types.length === 0) return;

        const dataArray = structuredClone(totalQuestions)

        const filteredQuestions = dataArray.filter((question) =>
          types.includes(question.type)
        )

      
        set({ selectedTypesQuestions: types, questions: filteredQuestions, App_status: App_status.CHOSE_LEVELS });
      },

      setQuestionsLevel(levels: string[]){
        if(levels.length === 0) return;
        const questions = get().questions;

        const filteresQuestions = questions.filter((q) => levels.some(l => l.includes(q.level)))
        

        set({ questions: filteresQuestions, App_status: App_status.INIT });
      },



      checkWin() {
        const questions = get().questions;
        const totalQuestionsLenght = questions.length;

        const correctQuestions = questions.filter(
          (q) => q.userAnswer === q.correct
        );

        if (correctQuestions.length >= Math.round(totalQuestionsLenght / 2)) {
          
          DoConffeti();
          set({ win: true });
          return;
        }

        return set({ win: false });
      },

      setUserAnswer(answer: number) {
        const question = get().questions[get().currentQuestion];
        question.userAnswer = answer;

        set({
          questions: get().questions.map((q, index) => {
            return index === get().currentQuestion ? question : q;
          }),
        });

        if (get().currentQuestion == get().questions.length - 1) {
          setTimeout(() => {
            get().checkWin();
            return set({ App_status: App_status.FINISH });  
          }, 1000);
        }

        // setTimeout(() => {
        //   set({
        //     currentQuestion: get().currentQuestion + 1,
        //   });
        // }, 5000);
      },

      reset() {
        set({
          selectedTypesQuestions: null,
          currentQuestion: 0,
          questions: totalQuestions,
          App_status: App_status.CHOSE_TYPE_QUESTIONS,
          win: null,
        });
      },

      // funciones para navegacion de preguntas
      GoNext() {
        if (get().currentQuestion == get().questions.length - 1) return;

        set({ currentQuestion: get().currentQuestion + 1 });
      },

      GoBack() {
        if (get().currentQuestion == 0) return;
        set({ currentQuestion: get().currentQuestion - 1 });
      },
      // fin funciones store
    })),
    {
      name: "questionsStore", // unique name
      // (optional) by default the 'localStorage' is used
    }
  )
);
