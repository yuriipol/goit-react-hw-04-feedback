import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ setFeedback }) => {
  return (
    <div className={s.controls}>
      <button
        type="button"
        name="good"
        className={s.buttonGood}
        onClick={setFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.buttonNeutral}
        onClick={setFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.buttonBad}
        onClick={setFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  setFeedback: PropTypes.func.isRequired,
};
