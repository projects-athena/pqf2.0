import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        width: '100%',
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
        py: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            PRAQUEMFAZ
          </Typography>
        </Box>
        <Button variant='contained' color='tertiary'>Entre</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
