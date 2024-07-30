import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
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

          <CursoDestaqueHomeUser 
          image={cursos[0].image}
          professor={cursos[0].professor}
          professorImage={cursos[0].professorImage}
          curso={cursos[0].curso}
          duracao={cursos[0].duracao}
          avaliacao= {cursos[0].avaliacao}>
          </CursoDestaqueHomeUser>
        </Box>
    </Container>
  );
};

export default HomeUser;