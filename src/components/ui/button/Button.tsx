import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import { UpRightArrow } from '@/components/icons';

export enum EButtonClass {
  DEF = 'def',
  SEC = 'sec',
  ARROW = 'arrow',
}

export enum EButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

interface IButton {
  text: string;
  nameClass: EButtonClass;
  isLink: boolean;
  linkUrl?: string;
  typeBtn?: EButtonType;
  isExternal?: boolean;
  isDisabled?: boolean;
  handle?: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  nameClass,
  isLink,
  linkUrl,
  typeBtn = EButtonType.BUTTON,
  isExternal = false,
  isDisabled = false,
  handle,
}) => {
  const className = `${styles.btn} ${styles[nameClass]}`;

  if (isLink && linkUrl) {
    return (
      <Link href={linkUrl} className={className} target={isExternal ? '_blank' : '_self'}>
        {text}
        {nameClass === EButtonClass.ARROW && <UpRightArrow />}
      </Link>
    );
  }

  return (
    <button type={typeBtn} className={className} disabled={isDisabled} onClick={handle}>
      {text}
      {nameClass === EButtonClass.ARROW && <UpRightArrow />}
    </button>
  );
};

export default Button;
