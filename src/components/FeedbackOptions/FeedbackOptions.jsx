import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonType = Object.keys(options);
  return (
    <>
      {buttonType.map(key => {
        return (
          <button
            className={styles[key]}
            type="button"
            key={uniqid()}
            name={key}
            onClick={onLeaveFeedback}>
            {key}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
