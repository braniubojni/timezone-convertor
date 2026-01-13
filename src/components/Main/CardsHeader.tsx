import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import { useState, type FC } from 'react';
import { AllTzDeleteDialog } from './AllTzDeleteDialog';
import { SortSelect } from './SortSelect';
import { CardsWrapper, IconWrapper } from './styles';

export const CardsHeader: FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const onSubmit = () => {
    setOpenDialog(false);
  };
  const onClose = () => {
    setOpenDialog(false);
  };
  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <CardsWrapper>
        <Box>
          <SortSelect />
        </Box>
        <Box>
          <IconWrapper disableRipple onClick={handleClick}>
            <DeleteOutlineIcon />
          </IconWrapper>
        </Box>
      </CardsWrapper>
      <AllTzDeleteDialog
        onClose={onClose}
        onSubmit={onSubmit}
        open={openDialog}
      />
    </>
  );
};
