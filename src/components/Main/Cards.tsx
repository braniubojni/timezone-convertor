import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import type { FC } from 'react';
import { sortOption } from '../../context/consts';
import { useTimezone } from '../../context/hooks';
import { Card } from './Card';
import { CardsWrapper } from './styles';

export const Cards: FC = () => {
  const {
    state: { sortOpt, userTzs },
  } = useTimezone();
  const sortedTzs = userTzs.toSorted((a, b) => {
    if (sortOpt === sortOption.ALPHABET) {
      return a.id - b.id;
    }
    if (sortOpt === sortOption.LAST_CREATED) {
      return dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1;
    }
    if (sortOpt === sortOption.OFFSET) {
      return (
        dayjs().tz(a.timezone).utcOffset() - dayjs().tz(b.timezone).utcOffset()
      );
    }
    return 0;
  });

  return (
    <CardsWrapper>
      {sortedTzs.map((tz) => (
        <Card key={tz.id} timezone={tz.timezone} />
      ))}
      {!userTzs.length && (
        <Typography variant="h6" color="white">
          No timezones added
        </Typography>
      )}
    </CardsWrapper>
  );
};
