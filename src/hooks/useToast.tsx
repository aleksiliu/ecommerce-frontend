import { useState } from 'react';
import Toast from '../components/Toast';

export const useToast = () => {
  const [toastData, setToastData] = useState<{ 
    message: string; 
    buttonText?: string; 
    buttonAction?: () => void; 
  } | null>(null);

  const showToast = (message: string, buttonText?: string, buttonAction?: () => void) => {
    setToastData({ message, buttonText, buttonAction });
    setTimeout(() => {
      setToastData(null);
    }, 3000); 
  };

  const ToastComponent = () =>
    toastData ? (
      <Toast
        message={toastData.message}
        buttonText={toastData.buttonText}
        buttonAction={toastData.buttonAction}
        onClose={() => setToastData(null)}
      />
    ) : null;

  return { showToast, ToastComponent };
};
