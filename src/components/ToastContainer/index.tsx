import React from 'react';
import { ToastMessage, useToast } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map(message => (
      <Toast key={message.id} message={message} />
    ))}
  </Container>
);

export default ToastContainer;
