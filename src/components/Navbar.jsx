import React from 'react';
import { Toolbar, AppBar, Box, Typography, Switch } from '@mui/material';


export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
