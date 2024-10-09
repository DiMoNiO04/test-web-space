import React from 'react';
import styles from './Checkbox.module.scss';
import { EInputType } from '../input/Input';

interface ICheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, checked, onChange, name }) => {
  return (
    <div className={styles.block}>
      <input
        type={EInputType.CHECKBOX}
        checked={checked}
        onChange={onChange}
        name={name}
        id={name}
        className={styles.checkbox}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
