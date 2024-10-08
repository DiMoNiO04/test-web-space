import React from 'react';
import styles from './AdressOffice.module.scss';

interface IAddressOffice {
  className?: string;
}

const AddressOffice: React.FC<IAddressOffice> = ({ className }) => {
  return (
    <div className={`${styles.block} ${className}`}>
      <h6 className="h6">Адрес офиса</h6>
      <p className={styles.address}>
        РБ, г. Минск, <br /> ул. Ленина, 1
      </p>
    </div>
  );
};

export default AddressOffice;
