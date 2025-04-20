import { create } from "zustand";
import { questionsArray } from "../lib/utils.d";
import { Question, App_status } from "../lib/types.d";
import confetti from "canvas-confetti";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface QuestionsStore {
  currentQuestion: number;
  questions: Question[];
  App_status: App_status;
  setQuestions: (nroQuestions: number) => void;
  setUserAnswer: (answer: number) => void;
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
      currentQuestion: 0,
      questions: [],
      App_status: App_status.INIT,
      win: null,

      setQuestions(nroQuestions: number) {
        const newQuestions = structuredClone(questionsArray)
          .sort(() => Math.random() - 0.5)
          .slice(0, nroQuestions);

        // setear el array questions con el numero de preguntas que se le pase y hacerlo al azar
        set({
          questions: newQuestions,
          App_status: App_status.ASKING,
        });
      },

      checkWin() {
        const questions = get().questions;
        const totalQuestions = questions.length;

        const correctQuestions = questions.filter(
          (q) => q.userAnswer === q.correct
        );

        if (correctQuestions.length >= Math.round(totalQuestions / 2)) {
          console.log("seteado win");
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
          get().checkWin();

          return set({ App_status: App_status.FINISH });
        }

        setTimeout(() => {
          set({
            currentQuestion: get().currentQuestion + 1,
          });
        }, 1000);
      },

      reset() {
        set({
          currentQuestion: 0,
          questions: [],
          App_status: App_status.INIT,
          win: null,
        });
      },

      GoNext() {
        if (get().currentQuestion == get().questions.length - 1) return;

        set({ currentQuestion: get().currentQuestion + 1 });
      },

      GoBack() {
        if (get().currentQuestion == 0) return;
        set({ currentQuestion: get().currentQuestion - 1 });
      },
    })), {
      name: "questionsStore", // unique name
      // (optional) by default the 'localStorage' is used
    }
  )
);
