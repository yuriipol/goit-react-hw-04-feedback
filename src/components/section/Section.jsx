import s from './Section.module.css';
import PropTypes from 'prop-types';
import FeedbackOptions from 'components/feedbackOptions';
import Statistics from 'components/statistics';
import Notification from 'components/notification';

const Section = ({
  title,
  options,
  setFeedback,
  setTotal,
  setPercentage,
  visible,
}) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <FeedbackOptions setFeedback={setFeedback} />
      <h2 className={s.statisticsTitle}>Statistics:</h2>
      <br />
      {visible ? (
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
Section.propTypes = {
  setTotal: PropTypes.func.isRequired,
  setPercentage: PropTypes.func.isRequired,
  setFeedback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
};
