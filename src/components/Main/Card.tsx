import {
  default as CloseIcon,
  default as SvgIcon,
} from '@mui/icons-material/Close';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { useState, type FC } from 'react';
import { useTimezone } from '../../context/hooks';
import { defineValue } from './helpers';
import { BootstrapInput, CardWrapper } from './styles';
import { TzDeleteDialog } from './TzDeleteDialog';

type CardProps = {
  timezone: string;
};

export const Card: FC<CardProps> = ({ timezone }) => {
  const {
    state: { selectedTime, sourceTimezone, userTzs },
    dispatch,
    updateUserTzs,
  } = useTimezone();
  const time = dayjs().tz(timezone).format('HH:mm');
  const offset = dayjs().tz(timezone).format('Z');
  const [, city] = timezone.split('/');
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const name = city.includes('_') ? city.split('_').join(' ') : city;
  const isSource = sourceTimezone === timezone;
  const converted = defineValue(selectedTime, sourceTimezone, timezone);
  const value = isSource
    ? selectedTime
    : converted
    ? converted.format('HH:mm')
    : '';
  const onChange = (newValue: string, timezone: string) => {
    dispatch({ type: 'SET_SOURCE_TIMEZONE', payload: timezone });
    dispatch({
      type: 'SET_SELECTED_TIME',
      payload: newValue,
    });
  };
  const onDelDialogToggle = () => {
    setOpenDialog((prev) => !prev);
  };
  const onDelSubmit = () => {
    const filteredTzs = userTzs.filter((tz) => tz.timezone !== timezone);
    updateUserTzs(filteredTzs);
    setOpenDialog(false);
  };

  return (
    <CardWrapper>
      <SvgIcon onClick={onDelDialogToggle}>
        <CloseIcon />
      </SvgIcon>
      <CardContent>
        <Typography variant="h5" component="div" noWrap>
          {name}
        </Typography>
        <Typography noWrap>Current time {time}</Typography>
        <Typography noWrap>Offset {offset}</Typography>
      </CardContent>
      <CardActions>
        <BootstrapInput
          className="time"
          value={value}
          onChange={(e) => {
            onChange(e.target.value, timezone);
          }}
          slotProps={{
            input: {
              type: 'time',
              min: '00:00',
              max: '23:59',
            },
          }}
        />
      </CardActions>
      <TzDeleteDialog
        tz={timezone}
        open={openDialog}
        onClose={onDelDialogToggle}
        onSubmit={onDelSubmit}
      />
    </CardWrapper>
  );
};
