import s from './Statistics.module.css';

const Statistics = ({ options }) => {
  return (
    <div className={s.statistics}>
      <span className={s.goodText}>Good: {options.valueGood}</span>
      <span className={s.neutralText}>Neutral: {options.valueNeutral}</span>
      <span className={s.badText}>Bad: {options.valueBad}</span>
      <span className={s.totalText}>Total: {options.valueTotal}</span>
      <span className={s.postisvPercentageText}>
        Posistive fedback: {options.valuePositivePercentage}%
      </span>
    </div>
  );
};

export default Statistics;
