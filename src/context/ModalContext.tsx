import { createContext } from 'react';

interface IModalContext {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export default ModalContext;
