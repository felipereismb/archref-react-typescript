import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateX(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateX(360deg)' },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container display={messages.length > 0}>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} styleAnimation={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
