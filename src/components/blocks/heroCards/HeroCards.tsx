import React from 'react';
import styles from './HeroCards.module.scss';
import SaleCard from '../saleCard/SaleCard';
import PhotoCard from '../photoCard/PhotoCard';

const HeroCards: React.FC = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardsRow}>
        <SaleCard text="Оформление рассрочки по ставке от 15% годовых" linkUrl="#" />
        <PhotoCard text="Барнхаусы" urlImage="/images/barnhouses.webp" />
      </div>
      <div className={styles.cardsRow}>
        <PhotoCard text="Таунхаусы" urlImage="/images/taunhouses.webp" />
        <SaleCard text="Скидка до 5% при полной предоплате за проект" linkUrl="#" />
      </div>
    </div>
  );
};

export default HeroCards;
