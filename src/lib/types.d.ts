export interface Question {
  question: string,
  answers: string[],
  correct: number
  userAnswer?: number,
};

export enum App_status{
  INIT = "INIT",
  FINISH = "FINISH",
  ASKING = "ASKING",
}