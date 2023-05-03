import { useAppSelector } from "../../redux/hooks";
import s from './ResultBoard.module.scss'

function ResultBoard() {
  const { mistakes } = useAppSelector(state => state.quize);

  return (
    <div className={s.result}>
      <p className={s.resultStat}>Your Result is {10 - mistakes.length}/10</p>
      {mistakes.length === 0
        ? (
          <p className={s.succeesMessage}>Great job! You are awesome!</p>
        )
        : (
          <div>
            <p className={s.mistakesMessage}>You made mistakes in the next words:</p>
            <ul className={s.mistakesList}>
              {mistakes.map(word => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default ResultBoard;