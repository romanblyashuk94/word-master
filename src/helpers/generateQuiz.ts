import { Question } from "../types/Question";
import { Word } from "../types/Word";

export const generateQuiz = (words: Word[]): Question[] => {
  const quizWords = getRandomWords(words, 10);

  const questions = quizWords.map((word) => {
    const answerOptions = getAnswerOptions(words, word);

    return { questionWord: word.eng, answerOptions };
  });

  return questions;
};

function getRandomWords(words, numWords) {
  const shuffled = [...words].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, numWords);
}

function getAnswerOptions(words, word) {
  const correctAnswer = { answerWord: word.ukr, isCorrect: true };

  const wordsForIncorectAnswers = words.filter((w) => w.id !== word.id);
  const incorrectAnswers = getRandomWords(wordsForIncorectAnswers, 3).map(
    (w) => ({ answerWord: w.ukr, isCorrect: false })
  );

  return shuffleArray([correctAnswer, ...incorrectAnswers]);
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
