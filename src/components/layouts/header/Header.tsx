import React from 'react';
import styles from './Header.module.scss';
import { AddressOffice, Button, EButtonClass, Logo, WorkTime } from '@/components/ui';
import { PhoneIcon } from '@/components/icons';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <Logo />
          <div className={styles.info}>
            <AddressOffice />
            <div className={styles.connection}>
              <a href="tel:+375999999999" className={styles.phone}>
                +375 99 999 99 99
              </a>
              <WorkTime />
            </div>
            <Button text="Заказать звонок" nameClass={EButtonClass.SEC} isLink={false} />
          </div>
          <button className={styles.phoneBtn}>
            <PhoneIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
