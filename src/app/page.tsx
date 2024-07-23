// app/page.tsx
'use client'

import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CursoDestaque from './components/CursoDestaque/cursoDestaque';
import CursoIndicacao from './components/CursoIndicacao/cursoIndicacao';
import content from './content/content.json';


const { cursosDestaqueTitle, courses } = content.cursosDestaque;

const cursos = [
  <CursoDestaque key={1} image='' title="Curso 1" subtitle="Descrição do Curso 1" />,
  <CursoDestaque key={2} image='' title="Curso 2" subtitle="Descrição do Curso 2" />,
  <CursoDestaque key={3} image='' title="Curso 3" subtitle="Descrição do Curso 3" />
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
          sx={{
            width: '100%',
            textAlign: 'left',
            zIndex: 1000,
            py: 1,
            left: 0,
            margin: 0,
            marginBottom: '35px'
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
              fontSize: '1.1rem', 
              marginTop: '7px',
              px: '5%' 
            }}
          >
            A transformação que sua carreira precisa na palma das suas mãos!
          </Typography>
      </Box>

      <Grid 
        container 
        spacing={2}
        sx={{justifyContent: 'center', marginBottom: 3}}
      >
        {courses.map((course) => (
          <Grid 
            item 
            key={course.title} 
            xs={6}
            md={3}
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
            }}
          >
            <CursoDestaque image={course.image} title={course.title} subtitle={course.subtitle} />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{marginBottom: 10}}>
        <CursoIndicacao></CursoIndicacao>
      </Box>

    </Container>
  );
}
