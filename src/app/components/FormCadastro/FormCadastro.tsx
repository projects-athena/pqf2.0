'use client'

import * as React from 'react';
import { FormHelperText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';

interface IFormInput {
  nome: string;
  sobreNome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  acceptedTerms: boolean;
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

const FormCadastro: React.FC = () => 
{
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  return (
    <>
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
            Registre-se!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                  {...register('nome')}
                  error={!!errors.nome}
                  helperText={errors.nome?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sobrenome"
                  label="Sobrenome"
                  autoComplete="family-name"
                  {...register('sobreNome')}
                  error={!!errors.sobreNome}
                  helperText={errors.sobreNome?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Endereço de Email"
                  autoComplete="email"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('senha')}
                  error={!!errors.senha}
                  helperText={errors.senha?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Confirme sua senha"
                  type="password"
                  id="confirmationpassword"
                  autoComplete="new-password"
                  {...register('confirmacaoSenha')}
                  error={!!errors.confirmacaoSenha}
                  helperText={errors.confirmacaoSenha?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      {...register('acceptedTerms')} 
                      sx={{ color: '#f50057','&.Mui-checked': {color: '#f50057',},}}
                    />
                  }
                  label="Estou de acordo com os termos e condições previstos em lei, aplicam-se T&C"
                />
                {errors.acceptedTerms && (
                  <FormHelperText error>{errors.acceptedTerms.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href={"/Login"} variant="inherit">
                  Já possui uma conta? Entre aqui!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 3 }} />
      </Container>
    </>
  );
}

export default FormCadastro;