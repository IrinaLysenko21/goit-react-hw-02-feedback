import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ label, value }) => {
  return (
    <p>
      <span className={styles.statName}>{label}:</span>{' '}
      <span className={styles.statValue}>{value}</span>
    </p>
  );
};

Statistic.defaultProps = {
  value: 0,
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistic;
