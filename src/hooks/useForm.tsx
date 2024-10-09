import { useState } from 'react';
import { sendMessage } from '@/api/telegram';

interface IFormData {
  phone: string | null;
  comment: string | null;
  isChecked?: boolean;
  isAgree?: boolean;
}

const useFormSubmit = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const [isSubmitNoSuccess, setIsSubmitNoSuccess] = useState<boolean>(false);

  const handleSubmit = async (formData: IFormData, resetForm: () => void) => {
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
      setIsSubmitNoSuccess(false);
    } catch (error) {
      console.error(error);
      setIsSubmitSuccess(false);
      setIsSubmitNoSuccess(true);
    } finally {
      setIsSending(false);

      setTimeout(() => {
        setIsSubmitSuccess(false);
        setIsSubmitNoSuccess(false);
      }, 5000);
    }
  };

  return { isSending, isSubmitSuccess, isSubmitNoSuccess, handleSubmit };
};

export default useFormSubmit;
