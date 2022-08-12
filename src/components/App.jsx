import React from 'react';
import Section from './section/Section';

class App extends React.Component {
  state = {
    valueGood: 0,
    valueBad: 0,
    valueNeutral: 0,
    valueTotal: 0,
    valuePositivePercentage: 0,
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      valuePositivePercentage: Math.round(
        (prevState.valueGood / prevState.valueTotal) * 100
      ),
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      valueTotal:
        prevState.valueGood + prevState.valueBad + prevState.valueNeutral,
    }));
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badIncrement = () => {
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section
          title="Plese lieve fedback"
          setFeedbackGood={this.goodIncrement}
          setFeedbackBad={this.badIncrement}
          setFeedbackNeutral={this.neutralIncrement}
          options={this.state}
        />
      </div>
    );
  }
}
export default App;
