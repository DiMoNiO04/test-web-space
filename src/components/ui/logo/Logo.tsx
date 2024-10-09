import React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/components/icons';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href="#" className={styles.logo}>
      <LogoIcon className={styles.icon} />
      <div className={styles.block}>
        <p className={styles.strong}>Строительные решения</p>
        <p className={styles.text}>строительная компания</p>
      </div>
    </Link>
  );
};

export default Logo;
