import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import content from '../content/content.json';
import Carousel from '../components/novosCursosComponents/Carousel';
import CardNovoCurso from '../components/novosCursosComponents/cardsNovosCursosDisponiveis';
import CardCursosMaisComprados from '../components/novosCursosComponents/cardsCursosMaisComprados';

export default function NovosCursos() {
  const { novosCursos, cursosMaisComprados } = content;

  return (
    <div>
      <Box> {/* 1 wrapper */}
        <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
          <strong>{content.novosCursos.maintitle}</strong>
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Carousel itemsPerPage={3} direction="column">
            {novosCursos.courses.map((course, index) => (
              <CardNovoCurso
                key={index}
                title={course.title}
                subtitle={course.subtitle}
                image={course.image}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box> {/* 2 wrapper*/}
        <Grid sx={{marginLeft:'-50px'}} container spacing={2} justifyContent="center">
          <Grid item>
            <Typography sx={{ marginTop: '30px' }} variant='h5' color='white'>
              <strong>{content.cursosMaisComprados.maintitle}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Button sx={{ color: '#fff', marginTop:'30px', textDecoration:'none' }}>
              <Typography variant='subtitle2' sx={{textDecoration:'none'}}>Veja Mais</Typography>
            </Button>
          </Grid>
        </Grid>
        <Box sx={{marginBottom:'100px'}}>
          <Carousel itemsPerPage={2} direction="row">
            {cursosMaisComprados.courses.map((courses, index) => (
              <CardCursosMaisComprados
                key={index}
                image={courses.image}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}
