import React from 'react';
import { ErrorMessage } from './error-message';

export const TypeDoesNotExistError = () => (
  <ErrorMessage title="Type does not exist" message="Maybe next year?"></ErrorMessage>
);
