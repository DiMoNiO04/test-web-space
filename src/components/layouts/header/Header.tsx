import React from 'react';
import styles from './Header.module.scss';
import { AddressOffice, Logo, WorkTime } from '@/components/ui';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <Logo />
          <div className={styles.info}>
            <AddressOffice />
            <div className={styles.connection}>
              <a href="tel:+375 99 999 99 99" className={styles.phone}>
                +375 99 999 99 99
              </a>
              <WorkTime />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
