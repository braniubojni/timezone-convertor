import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  [`& .${typographyClasses.root}`]: {
    color: theme.palette.text.primary,
  },
}));
