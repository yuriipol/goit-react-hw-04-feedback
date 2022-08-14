import s from './Statistics.module.css';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  setTotal: PropTypes.func.isRequired,
  setPercentage: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
  }),
};
