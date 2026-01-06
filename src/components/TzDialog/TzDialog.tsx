import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState, type FC } from 'react';
import { useTimezone } from '../../context/hooks';
import { ALL_TIMEZONES } from './consts';

type TTzDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const TzDialog: FC<TTzDialogProps> = ({ onClose, open }) => {
  const { state, updateUserTzs } = useTimezone();
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const disabledTzs = new Set(state.userTzs.map((tz) => tz.timezone));
  const onCancel = () => {
    setValue(null);
    setInputValue('');
    onClose();
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = value && ALL_TIMEZONES.indexOf(value);
    if (id && id !== -1) {
      const newItem = {
        id,
        timezone: value,
        createdAt: new Date().toISOString(),
      };
      const payload = [...state.userTzs, newItem];
      updateUserTzs(payload);
      onCancel();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      disableRestoreFocus
      slotProps={{
        paper: {
          component: 'form',
          sx: {
            height: 'auto',
            overflow: 'unset',
          },
          onSubmit,
        },
      }}
    >
      <DialogTitle>Add new timezone</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <DialogContentText>
          To add new timezone, please enter the timezone name here.
        </DialogContentText>
        <Autocomplete
          autoFocus
          disablePortal
          value={value}
          onChange={(_: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          getOptionLabel={(option) => option.replace(/_/g, ' ')}
          onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue);
          }}
          fullWidth
          options={ALL_TIMEZONES}
          renderInput={(params) => (
            <TextField {...params} autoFocus label="Search" />
          )}
          getOptionDisabled={(opt) => !!disabledTzs.has(opt)}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={!value} onClick={onCancel}>
          Cancel
        </Button>
        <Button disabled={!value} type="submit">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
