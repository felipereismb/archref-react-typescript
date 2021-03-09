import React, { useEffect } from 'react';

import checkIcon from '../../../assets/icons/check_outline.svg';
import errorIcon from '../../../assets/icons/error.svg';
import closeIcon from '../../../assets/icons/close.svg';
import infoIcon from '../../../assets/icons/info.svg';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  styleAnimation: any;
}

const icons = {
  info: infoIcon,
  error: errorIcon,
  success: checkIcon,
};

const Toast: React.FC<ToastProps> = ({ message, styleAnimation }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasdescription={message.description ? '1' : '0'}
      style={styleAnimation}
    >
      <img src={icons[message.type || 'info']} alt="Notification icon" />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        onClick={() => removeToast(message.id)}
        data-testid="button-remove"
      >
        <img src={closeIcon} alt="Close toast icon" />
      </button>
    </Container>
  );
};

export default Toast;
