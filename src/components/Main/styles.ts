import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { cardActionsClasses } from '@mui/material/CardActions';
import { cardContentClasses } from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

export const CardsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  maxWidth: '100%',
  transition: '0.3s',
  minHeight: '40vh',
  marginTop: theme.spacing(2),
  [`& > .${typographyClasses.root}`]: {
    color: theme.palette.primary.main,
  },
  '& > div': {
    flex: '1 0 20%',
    maxWidth: '30%',
    minWidth: '300px',
  },
}));

export const IconWrapper = styled(IconButton)(({ theme }) => ({
  height: 50,
  width: 50,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'ButtonFace',
  },
  '& svg': {
    height: '100%',
    width: '100%',
  },
}));

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: (theme.vars ?? theme).palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  '&.time': {
    '& input': {
      padding: '10px 10px 10px 12px',
    },
    '& .MuiInputBase-input': {
      '&:focus': {
        borderRadius: 4,
        borderColor: '#ff5846ff',
        boxShadow: '0 0 0 0.2rem rgba(247, 99, 0, 0.38)',
      },
    },
  },
}));

export const SelectWrapper = styled(FormControl)({
  width: 120,
});

export const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  position: 'relative',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transition: '0.3s',
    '& > svg': {
      display: 'block',
    },
  },
  '& > svg': {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(1),
    cursor: 'pointer',
    color: theme.palette.primary.contrastText,
    display: 'none',
  },
  [`& .${cardContentClasses.root}`]: {
    padding: theme.spacing(5),
  },
  [`& .${cardActionsClasses.root}`]: {
    margin: theme.spacing(2),
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
}));
