// app/page.tsx
'use client'

import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CursoDestaque from './components/CursoDestaque/cursoDestaque';
import content from './content/content.json';

//import './components/CarroselDestaque/style.css';
//import EmblaCarousel from './components/CarroselDestaque/EmblaCarousel'
//import { EmblaOptionsType } from 'embla-carousel';

/*const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())*/

const { maintitle, courses } = content.cursosDestaque;

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

      <Grid container spacing={2} sx={{ justifyContent: 'center' ,  marginBottom: 10}}>
        {courses.map((course) => (
          <Grid item key={course.title} sx={{ textAlign: 'center' }}>
            <CursoDestaque image={course.image} title={course.title} subtitle={course.subtitle} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
