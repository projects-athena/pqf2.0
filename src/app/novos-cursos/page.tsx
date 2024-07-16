import React from 'react';
import { Box, Typography } from '@mui/material';
import content from '../content/content.json';
import CardNovoCurso from '../components/novosCursosComponents/cardNovoCurso';

export default function NovosCursos() {
  const { maintitle, courses } = content.novosCursos;

  return (
    <div>
      <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
        <strong>{maintitle}</strong>
      </Typography>
      <Box>
        {courses.map((course, index) => (
          <CardNovoCurso 
            key={index} 
            title={course.title} 
            subtitle={course.subtitle} 
            image={course.image} 
          />
        ))}
      </Box>
    </div>
  );
}
