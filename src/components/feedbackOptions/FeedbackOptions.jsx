import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  setFeedbackGood,
  setFeedbackBad,
  setFeedbackNeutral,
}) => {
  return (
    <div className={s.controls}>
      <button type="button" className={s.buttonGood} onClick={setFeedbackGood}>
        Good
      </button>
      <button
        type="button"
        className={s.buttonNeutral}
        onClick={setFeedbackNeutral}
      >
        Neutral
      </button>
      <button type="button" className={s.buttonBad} onClick={setFeedbackBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
