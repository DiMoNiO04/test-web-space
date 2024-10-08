import React from 'react';
import styles from './Footer.module.scss';
import { AddressOffice, Logo, WorkTime } from '@/components/ui';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.left}>
            <Logo />
            <p className={styles.text}>© 2024 ООО “Строительные решения”</p>
          </div>
          <div className={styles.center}>
            <AddressOffice className={styles.address} />
            <WorkTime />
          </div>
          <div className={styles.right}>
            <div className={styles.info}>
              ООО “Строительные решения” <br />
              Юридический адрес: <br />
              РБ, г. Минск, ул. Ленина, 1 <br />
              УНП: 111111111
            </div>
            <div className={styles.developer}>
              Разработка сайта: <a href="https://web-space.by/">Web-space.by</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
