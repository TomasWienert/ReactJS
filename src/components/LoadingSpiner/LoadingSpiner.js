import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpiner = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: "70px" }}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpiner;