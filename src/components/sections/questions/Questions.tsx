import React from 'react';
import styles from './Questions.module.scss';
import Image from 'next/image';

const Questions: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src="/images/questions.webp" alt="" width={660} height={428} />
          </div>
          <div className={styles.form}>
            <h2 className={styles.title}>Остались вопросы?</h2>
            <p className={styles.description}>
              Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
