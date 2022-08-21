import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, setTotal, setPercentage }) => {
  return (
    <div className={s.statistics}>
      <span className={s.goodText}>Good: {good}</span>
      <span className={s.neutralText}>Neutral: {neutral}</span>
      <span className={s.badText}>Bad: {bad}</span>
      <span className={s.totalText}>Total: {setTotal()}</span>
      <span className={s.postisvPercentageText}>
        Positive feedback: {setPercentage()}%
      </span>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  setTotal: PropTypes.func.isRequired,
  setPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
