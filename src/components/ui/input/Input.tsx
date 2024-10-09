import React from 'react';
import styles from './Input.module.scss';

export enum EInputType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'tel',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  FILE = 'file',
  NUMBER = 'number',
  TEXTAREA = 'textarea',
}

interface IInputProps {
  label: string;
  name?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Обновлено для поддержки textarea
  placeholder?: string;
  required?: boolean;
  type?: EInputType;
  isFlex?: boolean;
}

const Input: React.FC<IInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  type = EInputType.TEXT,
  isFlex = false,
}) => {
  return (
    <div className={`${styles.block} ${isFlex ? styles.blockFlex : ''}`}>
      <p className={styles.label}>
        {label}
        <span>{required ? '*' : ''}</span>
      </p>
      {type === EInputType.TEXTAREA ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={styles.textarea}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={styles.input}
          pattern="[+]{1}[0-9]{11,14}"
        />
      )}
    </div>
  );
};

export default Input;
