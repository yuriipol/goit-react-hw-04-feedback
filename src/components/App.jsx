import { useState } from 'react';
import Section from './section';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    const PositivePercentage = Math.round(
      (good / (good + bad + neutral)) * 100
    );
    return PositivePercentage;
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const increment = event => {
    const { name } = event.target;
    // console.log(event.target);
    // this.setState(prevState => ({
    //   [name]: prevState[name] + 1,
    // }));
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const total = good + bad + neutral;
  return (
    <div>
      <Section title="Please lieve feedback">
        <FeedbackOptions
          setFeedback={increment}
          good={good}
          bad={bad}
          neutral={neutral}
        />

        {total > 0 ? (
          <Statistics
            setTotal={countTotalFeedback}
            setPercentage={countPositiveFeedbackPercentage}
            good={good}
            bad={bad}
            neutral={neutral}
          />
        ) : (
          <Notification massege="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
