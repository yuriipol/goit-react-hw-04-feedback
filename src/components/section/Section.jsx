import s from './Section.module.css';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';

const Section = ({
  title,
  options,
  setFeedbackGood,
  setFeedbackBad,
  setFeedbackNeutral,
}) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <FeedbackOptions
        setFeedbackGood={setFeedbackGood}
        setFeedbackBad={setFeedbackBad}
        setFeedbackNeutral={setFeedbackNeutral}
      />
      <h2 className={s.statisticsTitle}>Statistics</h2>
      <Statistics options={options} />
    </>
  );
};

export default Section;
