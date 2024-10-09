'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import { ModalContext } from '@/context';

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const clearStyles = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      clearStyles();
    }

    return () => {
      clearStyles();
    };
  }, [isModalOpen]);

  return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
