export interface Question {
  question: string,
  answers: string[],
  type: string,
  correct: number
  userAnswer?: number,
  
};

export enum App_status{
  CHOSE_TYPE_QUESTIONS = "CHOSE_TYPE_QUESTIONS",
  INIT = "INIT",
  FINISH = "FINISH",
  ASKING = "ASKING",
}



export const typeQuestions = {
  GEO: "Geografía",
  SCIENCE: "Ciencia",
  HISTORY: "Historia",
  BIOLOGY: "Biología",

} as const