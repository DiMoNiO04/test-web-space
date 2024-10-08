import React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/components/icons';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href="#" className={styles.logo}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
