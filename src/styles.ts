import Box, { boxClasses } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(3),
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  minWidth: 450,
  backgroundColor: theme.palette.background.default,
  [`& > .${boxClasses.root}:first-of-type`]: {
    alignSelf: 'self-end',
    ['& .MuiButtonBase-root']: {
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper,
      '& > svg': {
        cursor: 'pointer',
      },
    },
  },
}));
