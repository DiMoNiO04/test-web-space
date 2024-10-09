'use client';

import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { AddressOffice, Button, EButtonClass, Logo, WorkTime } from '@/components/ui';
import { PhoneIcon } from '@/components/icons';
import { ModalContext } from '@/context';

const SCROLL_THRESHOLD_DESKTOP = 50;
const SCROLL_THRESHOLD_MOBILE = 10;
const MOBILE_PX = 1023;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const context = useContext(ModalContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < MOBILE_PX ? SCROLL_THRESHOLD_MOBILE : SCROLL_THRESHOLD_DESKTOP;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
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
            <Button text="Заказать звонок" nameClass={EButtonClass.SEC} isLink={false} handle={context?.openModal} />
          </div>
          <button className={styles.phoneBtn} onClick={context?.openModal}>
            <PhoneIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
