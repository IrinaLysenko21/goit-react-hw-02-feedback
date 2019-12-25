import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      {Object.keys(options).map(option => (
        <li key={option} className={styles.optionsListItem}>
          <button
            name={option}
            className={styles.optionBtn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
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
