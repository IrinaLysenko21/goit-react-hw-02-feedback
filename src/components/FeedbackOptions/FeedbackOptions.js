import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      {Object.keys(options).map(option => (
        <button
          key={shortid.generate()}
          name={option}
          className={styles.btn}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
