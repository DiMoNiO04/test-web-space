import React from 'react';
import { HeroCards, Slider } from '@/components/blocks';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.cont}`}>
        <div className={styles.container}>
          <Slider />
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
