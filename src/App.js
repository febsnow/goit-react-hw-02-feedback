import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import './App.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  total = 0;

  positivePercentage = 0;

  clickHandler = e => {
    this.setState(() => ({
      [e.target.name]: this.state[e.target.name] + 1,
    }));
  };

  countTotalFeedback(state) {
    this.total = 0;
    for (let item in state) {
      this.total += state[item];
    }
    return this.total;
  }

  countPositiveFeedbackPercentage(state) {
    return (
      (this.positivePercentage = Math.round(
        Number(state.good / (this.total - state.neutral) || 0) * 100,
      )) + '%'
    );
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback(this.state);
    const percentage = this.countPositiveFeedbackPercentage(this.state);
    return (
      <div className="feedbackWidget">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>

        {totalFeedbacks === 0 ? (
          <Notification message="No feedbacks given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              percentage={percentage}
              reset={this.reset}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
