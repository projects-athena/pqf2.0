import React from 'react';
import { Button, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

const CategoriaHomeUser: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Button 
      variant="outlined" 
      sx={{
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        width: 80, 
        height: 80, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 2,
        padding: 0,
        border: '1.5px solid', 
        borderColor: 'secondary.main',
        '&:hover': {
          borderColor: 'secondary.main', 
        }}
      }
    >
      <CategoryIcon sx={{ fontSize: 36 }} />
      <Typography variant="caption" sx={{ marginTop: 1 }}>
        {label}
      </Typography>
    </Button>
  );
};

export default CategoriaHomeUser;
