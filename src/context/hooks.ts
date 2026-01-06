import { useContext } from 'react';
import { TimezoneCtx } from '.';

export const useTimezone = () => {
  const context = useContext(TimezoneCtx);
  if (!context) {
    throw new Error('useTimezone must be used within a TimezoneProvider');
  }
  return context;
};
