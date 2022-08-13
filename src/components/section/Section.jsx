import s from './Section.module.css';
import FeedbackOptions from 'components/feedbackOptions';
import Statistics from 'components/statistics';
import Notification from 'components/notification';

const Section = ({ title, options, setFeedback, setTotal, setPercentage }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <FeedbackOptions setFeedback={setFeedback} />
      <h2 className={s.statisticsTitle}>Statistics:</h2>
      <br />
      {options.visible ? (
        <Statistics
          options={options}
          setTotal={setTotal}
          setPercentage={setPercentage}
        />
      ) : (
        <Notification massege="There is no feedback" />
      )}
    </>
  );
};

export default Section;
