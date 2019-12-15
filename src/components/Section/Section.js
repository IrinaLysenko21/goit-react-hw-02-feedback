import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Container = ({ title, children }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Container;
