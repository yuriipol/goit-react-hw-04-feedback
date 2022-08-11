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

  ountPositiveFeedbackPercentage = () => {};

  goodIncrement = () => {
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
    }));
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
