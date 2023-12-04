import React from 'react';
import { Box, AppBar, Toolbar, IconButton, useTheme } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: theme.palette.primary.main }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <IconButton>
                <PersonIcon sx={{ color: 'black' }} />
              </IconButton>

              <IconButton>
                <NotificationsIcon sx={{ color: 'black' }} />
              </IconButton>

              <IconButton>
                <SettingsIcon sx={{ color: 'black' }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
