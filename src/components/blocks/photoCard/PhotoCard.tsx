import React from 'react';
import styles from './PhotoCard.module.scss';
import Image from 'next/image';

interface IPhotoCard {
  text: string;
  urlImage: string;
}

const PhotoCard: React.FC<IPhotoCard> = ({ text, urlImage }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={urlImage} alt={text} width={272} height={272} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default PhotoCard;
