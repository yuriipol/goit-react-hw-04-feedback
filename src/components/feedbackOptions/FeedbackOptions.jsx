import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  setFeedbackGood,
  setFeedbackBad,
  setFeedbackNeutral,
}) => {
  return (
    <div className={s.controls}>
      <button type="button" className={s.button} onClick={setFeedbackGood}>
        Good
      </button>
      <button type="button" className={s.button} onClick={setFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" className={s.button} onClick={setFeedbackBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
