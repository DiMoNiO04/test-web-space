import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';
import { LogoIcon } from '@/components/icons';

const Logo: React.FC = () => {
  return (
    <Link href="#">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
