'use client';

import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { Button, Checkbox, EButtonClass, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/components/ui/input/Input';
import Image from 'next/image';
import { CloseIcon } from '@/components/icons';

interface IFormData {
  phone: string | null;
  comment: string | null;
  isAgree: boolean;
}

const Modal: React.FC = () => {
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
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <button className={styles.closeBtn} type="button">
          <CloseIcon />
        </button>
        <div className={styles.img}>
          <Image src={'/images/popup.webp'} alt="" width={660} height={198} />
        </div>
        <div className={styles.form}>
          <div className={styles.formTitles}>
            <div className={styles.title}>Обратный звонок</div>
            <div className={styles.description}>
              Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
            </div>
          </div>
          <div className={styles.inputs}>
            <Input
              label="Телефон"
              name="phone"
              placeholder="+375 (99) 999-99-99"
              required={true}
              type={EInputType.PHONE}
              value={formData.phone || ''}
              onChange={handleInputChange}
            />
            <Input
              label="Комментарий"
              name="comment"
              placeholder="Ваш комментарий"
              required={false}
              type={EInputType.TEXTAREA}
              value={formData.comment || ''}
              onChange={handleInputChange}
            />
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
  );
};

export default Modal;
