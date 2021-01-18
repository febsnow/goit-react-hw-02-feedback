import React from 'react';
import styles from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, percentage, reset } = props;
  return (
    <>
      <p className={styles.type}>
        Good: <span className={styles.amount}>{good}</span>
      </p>
      <p className={styles.type}>
        Neutral: <span className={styles.amount}>{neutral}</span>
      </p>
      <p className={styles.type}>
        Bad: <span className={styles.amount}>{bad}</span>
      </p>
      <p className={styles.type}>
        Total: <span className={styles.amount}>{total}</span>
      </p>
      <p className={styles.type}>
        Positive feedbacks: <span className={styles.amount}>{percentage}</span>
      </p>
      <button className={styles.button} onClick={reset}>
        Reset statistics
      </button>
    </>
  );
};

export default Statistics;
