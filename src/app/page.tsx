// app/page.tsx
'use client'

import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CursoDestaque from './components/CursoDestaque/cursoDestaque';
import CursoIndicacao from './components/CursoIndicacao/cursoIndicacao';
import CarroselHome from './components/CarroselHome/carroselHome';
import content from './content/content.json';
import { EmblaOptionsType } from 'embla-carousel';


const { cursosDestaqueTitle, courses } = content.cursosDestaque;
const { indicacaoTitle, cursoIndicado } = content.cursoRecomendado;
const { categoriasTitle, categorias } = content.categoriasCurso;

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
        marginBottom: 3
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

      <Button sx={{justifyContent: 'center', marginBottom: 3, width: '100%', color: 'secondary.contrastText', borderRadius: 5}} variant='contained' color='tertiary'>Matricule-se Já!</Button>
      
      <Box sx={{ marginBottom: 4 }}>
        <CarroselHome autoplay={true} slides={courses.map((course, index) => (
          <CursoDestaque 
            key={index}
            image={course.image}
            title={course.title} 
            subtitle={course.subtitle} />
        ))} />
      </Box>
      

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
              {indicacaoTitle}
          </Typography>

          <CursoIndicacao 
          image={cursoIndicado.image} 
          nomeCurso={cursoIndicado.nomeCurso} 
          nomeInstrutor={cursoIndicado.nomeInstrutor}
          descricaoCurso={cursoIndicado.descricaoCurso}
          >  
          </CursoIndicacao>
      </Box>

      <Box sx={{marginBottom: 3}}>
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
          {cursosDestaqueTitle}
        </Typography>
        <Grid 
          container 
          spacing={2}
          sx={{justifyContent: 'center'}}
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
      </Box>

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
                {categoriasTitle}
        </Typography>
        <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {categorias.map((categoria) => (
              <Grid 
              item 
              key={categoria} 
              xs={2} 
              sm={4} 
              md={4}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
              }}
              >
                <Button
                fullWidth
                sx={{
                  height: '100%',
                  backgroundColor: 'secondary.main',
                  color: 'secondary.contrastText',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'tertiary.main',
                  },
                }}
                >
                  {categoria}
                </Button>
              </Grid>
            ))}
        </Grid>
      </Box>

      <Box sx={{marginBottom: 10}}>
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
          {cursosDestaqueTitle}
        </Typography>
        <Grid 
          container 
          spacing={2}
          sx={{justifyContent: 'center'}}
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
      </Box>

    </Container>
  );
}
