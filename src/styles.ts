import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  minWidth: 320,
  width: '100%',
  height: '100vh',
  overflow: 'auto',
  backgroundColor: theme.palette.background.default,
}));
