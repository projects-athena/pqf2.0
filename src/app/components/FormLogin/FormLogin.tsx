'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Box, Typography, TextField, Button, Grid, Link, CssBaseline } from '@mui/material';
import { loginValidationSchema } from '../../utils/validationSchema';
import { ILoginFormInput } from '@/app/types/types';
import Copyright from '../Copyright/Copyright';

const FormLogin: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginValidationSchema)
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = data => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      if (user.email === data.email && user.senha === data.senha) {
        alert('Login successful!');
        router.push('/');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No user found. Please register first.');
    }
  };

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
