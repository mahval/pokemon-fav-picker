import React from 'react';
import { ErrorMessageDisplay } from '../../styled-components/error-message';

interface ErrorMessageProps {
  title: string;
  message: string;
}

export const ErrorMessage = ({ title, message }: ErrorMessageProps) => (
  <ErrorMessageDisplay>
    <h3>{title}</h3>
    <p>{message}</p>
  </ErrorMessageDisplay>
);
