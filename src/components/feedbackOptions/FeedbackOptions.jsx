import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ setFeedback, options }) => {
  return (
    <div className={s.controls}>
      {options.map(item => (
        <button
          key={nanoid()}
          type="button"
          name={item}
          className={s.button}
          onClick={setFeedback}
        >
          {item}
        </button>
      ))}

      {/* <button
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
      </button> */}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  setFeedback: PropTypes.func.isRequired,
};
