import { Button, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as quizActions from '../redux/slices/quizSlice'
import { generateQuiz } from "../helpers/generateQuiz";
import { useState } from "react";
import Quiz from "../components/Quiz/Quiz";
import ResultBoard from "../components/ResultBoard/ResultBoard";
import { uid } from "uid";
import { Result } from "../types/Result";
import PreviousResults from "../components/PreviousResults/PreviousResults";


function TestPage() {
  const dispatch = useAppDispatch();
  const { vocabulary } = useAppSelector(state => state.words);
  const { quiz, currentQuestionNumber, isQuizDone, mistakes, previousResults } = useAppSelector(state => state.quize);
  const [errorMessage, setErrorMessage] = useState('');

  const handdleQuizStart = () => {
    if (vocabulary.length < 10) {
      setErrorMessage('You need to add at least 10 words to the vocabulary')
      dispatch(quizActions.setQuiz([]))
      return
    }

    dispatch(quizActions.setIsQuizDone(false))
    dispatch(quizActions.setQuiz(generateQuiz(vocabulary)))
  }

  const handleAnswer = (answer) => {
    const newMistakes = [...mistakes];
    const currentWord = quiz[currentQuestionNumber - 1].questionWord;

    if (!answer.isCorrect) {
      dispatch(quizActions.addMistake(currentWord));
      newMistakes.push(currentWord)
    }

    if (currentQuestionNumber === 10) {
      const result: Result = {
        id: uid(),
        time: new Date().toLocaleString(),
        resultMark: `${10 - newMistakes.length}/10`,
        mistakes: newMistakes
      }

      dispatch(quizActions.addResult(result))
      dispatch(quizActions.setIsQuizDone(true))

      return
    }

    dispatch(quizActions.goToNextQuestion())
  }

  return (
    <div>
      <Button
        variant="contained"
        sx={{ display: 'block', width: 200, margin: '0 auto 50px' }}
        type="submit"
        onClick={() => handdleQuizStart()}
      >
        Start new quiz
      </Button>


      {errorMessage && <p>{errorMessage}</p>}

      {quiz.length !== 0 && (
        <Paper elevation={3} sx={{ maxWidth: 450, margin: '0 auto', minHeight: 216, padding: '20px' }}>
          {isQuizDone
            ? <ResultBoard />
            : <Quiz onAnswer={handleAnswer} />}
        </Paper>
      )}

      {previousResults.length !== 0 && <PreviousResults />}

    </div>
  );
}

export default TestPage;