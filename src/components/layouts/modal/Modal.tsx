'use client';

import React, { useContext, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button, Checkbox, EButtonClass, EButtonType, Input } from '@/components/ui';
import { EInputType } from '@/components/ui/input/Input';
import { CloseIcon } from '@/components/icons';
import { ModalContext } from '@/context';
import { sendMessage } from '@/api/telegram';
import styles from './Modal.module.scss';

interface IFormData {
  phone: string | null;
  comment: string | null;
  isChecked: boolean;
}

const Modal: React.FC = () => {
  const context = useContext(ModalContext);
  const modalInnerRef = useRef<HTMLDivElement | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const [isSubmitNoSuccess, setIsSubmitNoSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState<IFormData>({
    phone: null,
    comment: null,
    isChecked: false,
  });

  useEffect(() => {
    if (context?.isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [context?.isModalOpen]);

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

  const handleClickOutside = (e: MouseEvent) => {
    if (modalInnerRef.current && !modalInnerRef.current.contains(e.target as Node)) {
      context?.closeModal();
    }
  };

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      const message = `
          Поступила заявка с сайта! \n
          Телефон: ${formData.phone}\n
          Комментарий: ${formData.comment}
        `;

      await sendMessage(message);
      resetForm();
      setIsSubmitSuccess(true);
    } catch (error) {
      console.error(error);
      setIsSubmitNoSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData({
      phone: null,
      comment: null,
      isChecked: false,
    });
  };

  return (
    <div className={`${styles.modal} ${context?.isModalOpen && styles.open}`}>
      <div className={styles.modalInner} ref={modalInnerRef}>
        <button className={styles.closeBtn} type="button" onClick={context?.closeModal}>
          <CloseIcon />
        </button>
        <div className={styles.img}>
          <Image src={'/images/popup.webp'} alt="" width={660} height={198} />
        </div>
        <div className={styles.form}>
          <div className={styles.formTitles}>
            <div className={styles.title}>Обратный звонок</div>
            <div className={styles.description}>
              Заполните форму ниже, и наш специалист свяжется c вами в ближайшее время.
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
              checked={formData.isChecked}
              name="isChecked"
              onChange={handleCheckboxChange}
            />
            <Button
              isDisabled={!formData.isChecked || !formData.phone || isSending}
              nameClass={EButtonClass.DEF}
              typeBtn={EButtonType.SUBMIT}
              text={isSending ? 'Отправка...' : 'Отправить'}
              isLink={false}
              handle={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
