export interface Question {
  questionWord: string;
  answerOptions: Array<{
    answerWord: string;
    isCorrect: boolean;
  }>;
}
