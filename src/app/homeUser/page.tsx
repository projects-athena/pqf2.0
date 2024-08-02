"use client"

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CarroselHome from '../components/CarroselHome/carroselHome';
import CursoDestaqueHomeUser from '../components/CursoDestaqueHomeUser/cursoDestaqueHomeUser';
import content from '../content/userHome.content.json';

const { maintitle, cursos } = content.cursosDestaqueHomeUser;

const HomeUser: React.FC = () => {
  return (
    <Container maxWidth="lg">
        <Box sx={{marginBottom: 4}}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                paddingBottom: '5px',
                px: '5%' ,
                marginBottom: 1,
              }}
            >
              {maintitle}
          </Typography>

          <Box sx={{ marginBottom: 4 }}>
            <CarroselHome autoplay={true} slides={cursos.map((curso, index) => (
              <CursoDestaqueHomeUser 
                key={index}
                image={curso.image}
                professor={curso.professor}
                professorImage={curso.professorImage}
                curso={curso.curso}
                duracao={curso.duracao}
                avaliacao= {curso.avaliacao}/>
            ))} />
          </Box>
        </Box>
    </Container>
  );
};

export default HomeUser;