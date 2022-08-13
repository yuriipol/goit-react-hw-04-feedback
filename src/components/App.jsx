import React from 'react';
import Section from './section';

class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
    visible: false,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const PositivePercentage = Math.round(
      (good / (good + bad + neutral)) * 100
    );
    return PositivePercentage;
    // this.setState(prevState => ({
    //   valuePositivePercentage: Math.round(
    //     (prevState.good / prevState.valueTotal) * 100
    //   ),
    // }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  show = () => {
    this.setState({ visible: true });
  };

  increment = event => {
    // console.log(event.target.name);
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.show();
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
  };

  render() {
    return (
      <div>
        <Section
          title="Plese lieve fedback"
          setFeedback={this.increment}
          setTotal={this.countTotalFeedback}
          setPercentage={this.countPositiveFeedbackPercentage}
          options={this.state}
        />
      </div>
    );
  }
}
export default App;
