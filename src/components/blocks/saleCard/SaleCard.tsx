import React from 'react';
import styles from './SaleCard.module.scss';
import { Button, EButtonClass } from '@/components/ui';

interface ISaleCard {
  text: string;
  linkUrl: string;
}

const SaleCard: React.FC<ISaleCard> = ({ text, linkUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>{text}</div>
      <Button text="Подробнее" nameClass={EButtonClass.ARROW} isLink={true} linkUrl={linkUrl} />
    </div>
  );
};

export default SaleCard;
