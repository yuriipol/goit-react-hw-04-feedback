import s from './Statistics.module.css';

const Statistics = ({
  options: { good, neutral, bad },
  setTotal,
  setPercentage,
}) => {
  const percentage = setPercentage();
  const total = setTotal();

  return (
    <div className={s.statistics}>
      <span className={s.goodText}>Good: {good}</span>
      <span className={s.neutralText}>Neutral: {neutral}</span>
      <span className={s.badText}>Bad: {bad}</span>
      <span className={s.totalText}>Total: {total}</span>
      <span className={s.postisvPercentageText}>
        Posistive fedback: {percentage}%
      </span>
    </div>
  );
};

export default Statistics;
