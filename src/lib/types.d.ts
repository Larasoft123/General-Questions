export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  respuesta: string;
  correct: boolean;
}
export enum StatusEnum {
  Correct = "correct",
  None = "Ninguno seleccionado",
  Incorrect = "incorrect",
}
