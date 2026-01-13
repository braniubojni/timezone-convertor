import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: theme.spacing(2),

  [`& .${typographyClasses.root}`]: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    fontSize: '6vmin',
  },

  ['& .MuiButtonBase-root']: {
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    '& > svg': {
      cursor: 'pointer',
    },
  },
}));
