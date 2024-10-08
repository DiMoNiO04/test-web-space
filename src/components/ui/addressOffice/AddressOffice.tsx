import React from 'react';
import styles from './AdressOffice.module.scss';

const AddressOffice: React.FC = () => {
  return (
    <div className={styles.block}>
      <h6 className="h6">Адрес офиса:</h6>
      <p className={styles.address}>
        РБ, г. Минск, <br /> ул. Ленина, 1
      </p>
    </div>
  );
};

export default AddressOffice;
