export interface Question {
  questionWord: string;
  answerOptions: Array<{
    id: string;
    answerWord: string;
    isCorrect: boolean;
  }>;
}
