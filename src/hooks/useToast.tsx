import { useState } from 'react';
import Toast from '../components/Toast';

export const useToast = () => {
  const [toastData, setToastData] = useState<{ message: string; buttonText?: string; buttonHref?: string } | null>(null);

  const showToast = (message: string, buttonText?: string, buttonHref?: string) => {
    setToastData({ message, buttonText, buttonHref });
    setTimeout(() => {
      setToastData(null);
    }, 3000); 
  };

  const ToastComponent = () =>
    toastData ? (
      <Toast
        message={toastData.message}
        buttonText={toastData.buttonText}
        buttonHref={toastData.buttonHref}
        onClose={() => setToastData(null)}
      />
    ) : null;

  return { showToast, ToastComponent };
};
