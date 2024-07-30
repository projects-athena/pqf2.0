import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import VideoPlayer from '../components/Video/VideoPlayer';
import playerContent from '../content/player.content.json';

const VideoPage: React.FC = () => {
  const course = playerContent.playerCursos.cursos[0];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: '100%', marginBottom: 2 }}>
            <VideoPlayer />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: 'white' }} variant="h4" gutterBottom>
            {course.nome}
          </Typography>
          <Typography sx={{ color: 'white' }} variant="body1" gutterBottom>
            {course.descricao}
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: 'white' }} variant="h6">Rating: {course.rating}</Typography>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: 'white' }} variant="h6">Módulos do Curso</Typography>
            <Box>
              {course.aulas.map((aula) => (
                <Box key={aula.id} sx={{ marginBottom: 1, padding: 1, cursor: 'pointer' }}>
                  <Typography sx={{ color: 'white' }} variant="body1">{aula.nome}</Typography>
                  <Typography sx={{ color: 'white' }} variant="body2">{aula.descricao}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Typography sx={{ color: 'white' }} variant="h6" gutterBottom>Instrutor</Typography>
          <Typography sx={{ color: 'white' }} variant="body1">{course.professor}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoPage;