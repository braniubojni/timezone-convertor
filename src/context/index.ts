import { createContext } from 'react';
import { initialTimezoneState } from './consts';
import type { TimezoneAction, TTimezoneContext } from './types';

type TimezoneContext = {
  state: TTimezoneContext;
  dispatch: React.Dispatch<TimezoneAction>;
  updateUserTzs: (userTzs: TTimezoneContext['userTzs']) => void;
};

export const TimezoneCtx = createContext<TimezoneContext>({
  state: initialTimezoneState,
  dispatch: () => {},
  updateUserTzs: () => {},
});
