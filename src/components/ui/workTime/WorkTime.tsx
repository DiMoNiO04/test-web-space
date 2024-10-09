import React from 'react';
import styles from './WorkTime.module.scss';

const WorkTime: React.FC = () => {
  return (
    <ul className={styles.times}>
      <li>пн – пт: с 09:00 до 18:00</li>
      <li>сб – вс: с 10:00 до 16:00</li>
    </ul>
  );
};

export default WorkTime;
