import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import { useEffect, useState, type FC } from 'react';
import { LOCAL_STORAGE_KEYS } from '../../context/consts';
import { useTimezone } from '../../context/hooks';
import { TzDialog } from '../TzDialog';
import { HeaderWrapper } from './styles';
import Typography from '@mui/material/Typography';

export const Header: FC = () => {
  const { dispatch } = useTimezone();
  const [isAddTz, setIsAddTz] = useState<boolean>(false);
  const onOpen = () => {
    setIsAddTz(true);
  };
  const onClose = () => {
    setIsAddTz(false);
  };
  const usrTzs = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TZS) || '[]';
  const currentTime = dayjs().tz().format('HH:mm');
  useEffect(() => {
    if (usrTzs) {
      dispatch({ type: 'SET_USER_TZS', payload: JSON.parse(usrTzs) });
    }
  }, [usrTzs, dispatch]);

  return (
    <>
      <Box>
        <IconButton onClick={onOpen}>
          <AddIcon />
        </IconButton>
      </Box>
      <HeaderWrapper>
        <Typography variant="h4" component="h1">
          Current Time {currentTime}
        </Typography>
        {/* <Box component="h3">Current Time {dayjs().tz().format('HH:mm')}</Box> */}
      </HeaderWrapper>
      <TzDialog open={isAddTz} onClose={onClose} />
    </>
  );
};
