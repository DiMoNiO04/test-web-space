'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Checkbox, EButtonClass, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/components/ui/input/Input';
import styles from './Questions.module.scss';

interface IFormData {
  phone: string | null;
  comment: string | null;
  isAgree: boolean;
}

const Questions: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    phone: null,
    comment: null,
    isAgree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value || null,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <section>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src="/images/questions.webp" alt="" width={660} height={428} />
          </div>
          <div className={styles.form}>
            <div>
              <h2 className={styles.title}>Остались вопросы?</h2>
              <p className={styles.description}>
                Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
              </p>
              <div className={styles.inputs}>
                <Input
                  label="Телефон"
                  name="phone"
                  placeholder="+375 (99) 999-99-99"
                  required={true}
                  type={EInputType.PHONE}
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  isFlex={true}
                />
                <Input
                  label="Комментарий"
                  name="comment"
                  placeholder="Ваш комментарий"
                  required={false}
                  type={EInputType.TEXTAREA}
                  value={formData.comment || ''}
                  onChange={handleInputChange}
                  isFlex={true}
                />
              </div>
            </div>
            <div className={styles.checkboxs}>
              <Checkbox
                label="Согласие на обработку персональных данных"
                checked={formData.isAgree}
                name="isAgree"
                onChange={handleCheckboxChange}
              />
              <Button nameClass={EButtonClass.DEF} typeBtn={EButtonType.SUBMIT} text="Отправить" isLink={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
