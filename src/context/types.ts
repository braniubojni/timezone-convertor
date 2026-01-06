import type { sortOption } from './consts';

export type TSortOption = keyof typeof sortOption;

export type TUserTz = {
  id: number;
  timezone: string;
  createdAt: string;
};

export type TTimezoneContext = {
  activeTimezone: string | null;
  selectedTime: string;
  sourceTimezone: string;
  sortOpt: TSortOption;
  userTzs: TUserTz[];
};

export type TimezoneActionTypes =
  | 'SET_ACTIVE_TIMEZONE'
  | 'SET_SELECTED_TIME'
  | 'SET_SOURCE_TIMEZONE'
  | 'SET_SORT_OPTION'
  | 'SET_USER_TZS';

export type TimezoneAction =
  | {
      type: 'SET_ACTIVE_TIMEZONE';
      payload: string | null;
    }
  | {
      type: 'SET_SELECTED_TIME';
      payload: string;
    }
  | {
      type: 'SET_SORT_OPTION';
      payload: TSortOption;
    }
  | {
      type: 'SET_SOURCE_TIMEZONE';
      payload: string;
    }
  | {
      type: 'SET_USER_TZS';
      payload: TUserTz[];
    };
