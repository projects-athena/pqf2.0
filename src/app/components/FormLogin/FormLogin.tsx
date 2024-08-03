'use client';

import * as React from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Link, CssBaseline } from '@mui/material';
import { useFormLogin } from './useFormLogin';
import Copyright from '../Copyright/Copyright';

const FormLogin: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormLogin();

  return (
    <Container component="main" maxWidth="xs" sx={{ color: 'secondary.contrastText', borderRadius: 2 }}>
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" sx={{ marginTop: 5 }}>
        Entrar
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'secondary.main',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Endereço de Email"
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ bgcolor: "white", borderRadius: 5 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('senha')}
            error={!!errors.senha}
            helperText={errors.senha?.message}
            sx={{ bgcolor: "white", borderRadius: 5 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="tertiary"
            sx={{ mt: 3, mb: 2, borderRadius: 5 }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link sx={{ color: "white" }} href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link sx={{ color: "white" }} href="/Cadastro" variant="body2">
                Cadastre-se
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}

export default FormLogin;
