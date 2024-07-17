// NovosCursos.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import content from '../content/content.json';
import CarouselNovoCurso from '../components/novosCursosComponents/CarouselNovoCurso';

export default function NovosCursos() {
  const { maintitle, courses } = content.novosCursos;

  return (
    <div>
      <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
        <strong>{maintitle}</strong>
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <CarouselNovoCurso courses={courses} />
      </Box>
    </div>
  );
}
