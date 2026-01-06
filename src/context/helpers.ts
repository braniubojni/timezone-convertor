import type { TimezoneAction, TTimezoneContext } from './types';

export const tzReducer = (
  state: TTimezoneContext,
  action: TimezoneAction
): TTimezoneContext => {
  switch (action.type) {
    case 'SET_ACTIVE_TIMEZONE':
      return { ...state, activeTimezone: action.payload };
    case 'SET_SELECTED_TIME':
      return { ...state, selectedTime: action.payload };
    case 'SET_SOURCE_TIMEZONE':
      return { ...state, sourceTimezone: action.payload };
    case 'SET_USER_TZS':
      return { ...state, userTzs: action.payload };
    case 'SET_SORT_OPTION':
      return { ...state, sortOpt: action.payload };
    default:
      return state;
  }
};
