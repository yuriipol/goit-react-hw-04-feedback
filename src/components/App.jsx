import React from 'react';
import Section from './section/Section';

class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
    valueTotal: 0,
    valuePositivePercentage: 0,
    displayStatistics: 'none',
    displayNotifications: 'flex',
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      valuePositivePercentage: Math.round(
        (prevState.good / prevState.valueTotal) * 100
      ),
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      valueTotal: prevState.good + prevState.bad + prevState.neutral,
    }));
  };

  increment = event => {
    // console.log(event.target.name);
    this.setState(() => ({
      displayStatistics: 'flex',
    }));
    this.setState(() => ({
      displayNotifications: 'none',
    }));
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));

    // if (event.target.name === 'good') {
    //   this.setState(prevState => ({
    //     valueGood: prevState.valueGood + 1,
    //   }));
    // } else if (event.target.name === 'bad') {
    //   this.setState(prevState => ({
    //     valueBad: prevState.valueBad + 1,
    //   }));
    // } else if (event.target.name === 'neutral') {
    //   this.setState(prevState => ({
    //     valueNeutral: prevState.valueNeutral + 1,
    //   }));
    // }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section
          title="Plese lieve fedback"
          setFeedback={this.increment}
          options={this.state}
        />
      </div>
    );
  }
}
export default App;
