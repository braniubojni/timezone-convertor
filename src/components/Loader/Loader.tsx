import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import type { FC } from 'react';

export const Loader: FC = () => {
  return (
    <Box sx={{ display: 'flex', position: 'absolute' }}>
      <CircularProgress />
    </Box>
  );
};
