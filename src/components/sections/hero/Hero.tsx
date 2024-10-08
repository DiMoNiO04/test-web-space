import React from 'react';
import styles from './Hero.module.scss';
import { HeroCards } from '@/components/blocks';

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
