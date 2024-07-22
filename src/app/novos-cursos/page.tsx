// NovosCursos.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import content from '../content/content.json';
import CarouselNovoCurso from '../components/novosCursosComponents/CarouselNovoCurso';

export default function NovosCursos() {
  const { courses } = content.novosCursos;

  return (
    <div>
      <Box> {/* 1 wrapper */}
        <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
          <strong>{content.novosCursos.maintitle}</strong>
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <CarouselNovoCurso courses={courses} itemsPerPage={3} />
        </Box>
      </Box>
      <Box> {/* 2 wrapper*/}
        <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
          <strong>{content.novosCursos.title}</strong>
        </Typography>
        <Button>Veja Mais</Button>
        <Box>
          <CarouselNovoCurso courses={courses} itemsPerPage={1} />
        </Box>
      </Box>
    </div>
  );
}
