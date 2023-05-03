import { Button } from "@mui/material";
import s from './Quiz.module.scss'
import { useAppSelector } from "../../redux/hooks";

function Quiz({ onAnswer }) {
  const { quiz, currentQuestionNumber } = useAppSelector(state => state.quize);

  return (
    <div className={s.quiz}>
      <div className={s.currentQuesstion}>
        <div className="questionNumber">{currentQuestionNumber}/10</div>
        <div className={s.question}>{quiz[currentQuestionNumber - 1].questionWord}</div>
      </div>
      <div className={s.answerOptions}>
        {quiz[currentQuestionNumber - 1].answerOptions.map(option => (
          <Button key={option.id} variant="outlined" onClick={() => onAnswer(option)}>{option.answerWord}</Button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;