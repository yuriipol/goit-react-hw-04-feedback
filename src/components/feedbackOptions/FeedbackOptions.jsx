import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const classNames = {
  good: s.good,
  neutral: s.neutral,
  bad: s.bad,
};

const FeedbackOptions = ({ setFeedback, good, bad, neutral }) => {
  const object = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  const arrayButtons = Object.keys(object);
  const buttons = arrayButtons.map(item => (
    <button
      key={nanoid()}
      type="button"
      name={item}
      className={classNames[item]}
      onClick={setFeedback}
    >
      {item}
    </button>
  ));
  return <div className={s.controls}>{buttons}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  setFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
