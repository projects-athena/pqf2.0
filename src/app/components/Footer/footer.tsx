// components/Footer.tsx
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';

const Footer = () => {
  return (
    <Box
      component="footer" 
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
        py: 1  // Adicionando padding vertical
      }}
    >
      <Container fixed>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={2.4}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button color="primary" fullWidth>
                  <PlayCircleOutlineIcon sx={{ color: 'white' }} />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption" align="center">Descubra</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2.4}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button color="primary" fullWidth>
                  <ExploreIcon sx={{ color: 'white' }} />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption" align="center">Explorar</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2.4}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button href={"/novos-cursos"} color="primary" fullWidth>
                  <ImportContactsIcon sx={{ color: 'white' }} />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption" align="center">Cursos</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2.4}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button color="primary" fullWidth>
                  <HeadphonesIcon sx={{ color: 'white' }} />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption" align="center">Podcast</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2.4}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button color="primary" fullWidth>
                  <SearchIcon sx={{ color: 'white' }} />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="caption" align="center">Busca</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
