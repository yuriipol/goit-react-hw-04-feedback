import s from './Section.module.css';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';

const Section = ({ title, options, setFeedback }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <FeedbackOptions setFeedback={setFeedback} />
      <h2 className={s.statisticsTitle}>Statistics:</h2>
      <br />
      {options.visible ? (
        <Statistics options={options} />
      ) : (
        <Notification massege="There is no feedback" />
      )}
    </>
  );
};

export default Section;
