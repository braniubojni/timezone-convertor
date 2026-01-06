import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type { FC } from 'react';

type AllTzDeleteDialogProps = {
  open: boolean;
  tz: string;
  onClose: () => void;
  onSubmit: () => void;
};

export const TzDeleteDialog: FC<AllTzDeleteDialogProps> = ({
  tz,
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      <DialogTitle>Delete timezone {tz}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this timezone?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};
