import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
  buttonText?: string;
  buttonAction?: () => void; 
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  onClose, 
  duration = 3000, 
  buttonText, 
  buttonAction
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-4 rounded shadow-lg z-10">
      {message} 
      {buttonText && buttonAction && (
        <button 
          className="ml-2 underline" 
          onClick={buttonAction} 
        >
        {buttonText}
        </button>
      )}
    </div>
  );
};

export default Toast;
