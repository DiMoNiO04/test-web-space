import React from 'react';
import styles from './Notification.module.scss';

interface INotification {
  isSuccess: boolean;
}

const Notification: React.FC<INotification> = ({ isSuccess }) => {
  return (
    <div className={`${styles.notification} ${isSuccess ? styles.success : styles.error}`}>
      {isSuccess ? 'Форма успешно отправлена!' : 'Произошла ошибка при отправке!'}
    </div>
  );
};

export default Notification;
