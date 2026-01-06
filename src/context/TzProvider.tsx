import { useReducer, type FC } from 'react';
import { tzReducer } from './helpers';
import { initialTimezoneState, LOCAL_STORAGE_KEYS } from './consts';
import { TimezoneCtx } from '.';
import type { TTimezoneContext } from './types';

interface TzProviderProps {
  children: React.ReactNode;
}

export const TimezoneProvider: FC<TzProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tzReducer, initialTimezoneState);
  const updateUserTzs = (userTzs: TTimezoneContext['userTzs']) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_TZS, JSON.stringify(userTzs));
    dispatch({ type: 'SET_USER_TZS', payload: userTzs });
  };

  return (
    <TimezoneCtx.Provider value={{ state, dispatch, updateUserTzs }}>
      {children}
    </TimezoneCtx.Provider>
  );
};
