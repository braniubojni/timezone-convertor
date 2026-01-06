import dayjs from 'dayjs';

export const defineValue = (
  selectedTime: string,
  sourceTimezone: string,
  timezone: string
) => {
  if (!selectedTime || !sourceTimezone) return null;
  const base = dayjs.tz(
    `${dayjs().format('YYYY-MM-DD')} ${selectedTime}`,
    sourceTimezone
  );
  return base.tz(timezone);
};
