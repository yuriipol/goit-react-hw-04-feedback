import s from './Statistics.module.css';

const Statistics = ({ options }) => {
  // console.log(options);
  const display = options.displayStatistics;
  // console.log(options.displayStatistics);
  return (
    <div className={s.statistics} style={{ display }}>
      <span className={s.goodText}>Good: {options.good}</span>
      <span className={s.neutralText}>Neutral: {options.neutral}</span>
      <span className={s.badText}>Bad: {options.bad}</span>
      <span className={s.totalText}>Total: {options.valueTotal}</span>
      <span className={s.postisvPercentageText}>
        Posistive fedback: {options.valuePositivePercentage}%
      </span>
    </div>
  );
};

export default Statistics;
