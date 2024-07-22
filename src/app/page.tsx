// app/page.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import CursoDestaque from './components/CursoDestaque/cursoDestaque';

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          textAlign: 'left',
          zIndex: 1000,
          py: 1,
          left: 0,
          margin: 0
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '2.7rem',
            paddingBottom: '5px',
            px: '5%' 
          }}
        >
          Faça o futuro acontecer!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: '1.3rem', 
            marginTop: '7px',
            px: '5%' 
          }}
        >
          A transformação que sua carreira precisa na palma das suas mãos!
        </Typography>
      </Box>

      <CursoDestaque
        image="https://via.placeholder.com/250"
        title="Curso de React"
        subtitle="Aprenda React do básico ao avançado"
      />
    </Box>
  );
}
