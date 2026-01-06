import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type { FC } from 'react';

type AllTzDeleteDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export const AllTzDeleteDialog: FC<AllTzDeleteDialogProps> = ({
  onClose,
  open,
  onSubmit,
}) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      <DialogTitle>Delete all timezones</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete all this timezones?
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
