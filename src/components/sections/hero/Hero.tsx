import React from 'react';
import styles from './Hero.module.scss';
import { HeroCards, Slider } from '@/components/blocks';

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <Slider />
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
