import { useAppSelector } from '../../redux/hooks';
import s from './PreviousResults.module.scss'

function PreviousResults() {
  const { previousResults } = useAppSelector(state => state.quize);

  return (
    <div className={s.previousResults}>
      <h2 className={s.title}>Previous results:</h2>
      <ul className={s.resultList}>
        {previousResults.map(result => (
          <li key={result.id} className={s.resultItem}>
            <p><span className={s.subtitle}>Time:</span> {result.time}</p>
            <p><span className={s.subtitle}>Mark:</span> {result.resultMark}</p>
            {result.mistakes.length !== 0 && <p><span className={s.subtitle}>Mistakes:</span> {result.mistakes.join(', ')}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousResults;