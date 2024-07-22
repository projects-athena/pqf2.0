'use client'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import  theme  from '../../styles/theme/theme';
import { loginValidationSchema } from '../../utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ILoginFormInput {
    email: string;
    senha: string;
}

function Copyright(props: any) 
{
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Pra Quem Faz © '}
      <Link color="inherit" href="#">
        Termos de serviço
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const FormLogin: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInput>({
        resolver: yupResolver(loginValidationSchema)
      });
    
      const onSubmit: SubmitHandler<ILoginFormInput> = data => {
        console.log(data);
      };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{bgcolor: 'secondary.main', color: 'secondary.contrastText',  borderRadius: 2, marginTop: -7, marginBottom: 10}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Faça seu acesso
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              autoComplete="email"
              autoFocus
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('senha')}
              error={!!errors.senha}
              helperText={errors.senha?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Acessar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha? Clique aqui
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não possuo uma conta"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default FormLogin;