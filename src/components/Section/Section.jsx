import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = props => {
  const { title, children } = props;
  return (
    <section className={styles.widgetSection}>
      <p className={styles.title}>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: ' ',
};
export default Section;
