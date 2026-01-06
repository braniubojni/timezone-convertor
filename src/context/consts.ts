import type { TTimezoneContext } from './types';

export const sortOption = {
  ALPHABET: 'ALPHABET',
  LAST_CREATED: 'LAST_CREATED',
  OFFSET: 'OFFSET',
} as const;

export const sortOpts = [
  { label: 'Alphabet', value: sortOption.ALPHABET },
  { label: 'Last Created', value: sortOption.LAST_CREATED },
  { label: 'Offset', value: sortOption.OFFSET },
];

export const initialTimezoneState: TTimezoneContext = {
  activeTimezone: null,
  selectedTime: '',
  sourceTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  sortOpt: sortOption.ALPHABET,
  userTzs: [],
};

export const LOCAL_STORAGE_KEYS = {
  USER_TZS: 'USER_TZS',
  SORT_OPTION: 'SORT_OPTION',
} as const;
