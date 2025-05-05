export interface Question {
  question: string,
  answers: string[],
  type: string,
  correct: number
  userAnswer?: number,
  level: LEVELS,
  description?: string,
};


export enum App_status{
  CHOSE_TYPE_QUESTIONS = "CHOSE_TYPE_QUESTIONS",
  CHOSE_LEVELS = "CHOSE_LEVELS",
  INIT = "INIT",
  FINISH = "FINISH",
  ASKING = "ASKING",
}

export enum LEVELS {
  FACIL = "Fácil",
  NORMAL = "Normal",
  DIFICIL = "Difícil",
  EXPERTO = "Experto",
  MAESTRO = "Maestro",
  IMPOSIBLE = "Imposible",
}



export const typeQuestions = {
  GEO: "Geografía",
  SCIENCE: "Ciencia",
  HISTORY: "Historia",
  BIOLOGY: "Biología",
  VZLA_HISTORY: "Historia de Venezuela",

} as const