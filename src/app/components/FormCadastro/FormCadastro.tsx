'use client';

import * as React from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, FormHelperText } from '@mui/material';
import { useFormCadastro } from './useFormCadastro';
import Copyright from '../Copyright/Copyright';

const FormCadastro: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useFormCadastro();

  return (
    <Container component="main" maxWidth="xs" sx={{ color: 'secondary.contrastText', borderRadius: 2 }}>
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" sx={{ marginTop: 5 }}>
        Registre-se!
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'secondary.main',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="nome"
                placeholder="Nome"
                autoFocus
                {...register('nome')}
                error={!!errors.nome}
                helperText={errors.nome?.message}
                sx={{ bgcolor: 'white', borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="sobrenome"
                placeholder="Sobrenome"
                autoComplete="family-name"
                {...register('sobreNome')}
                error={!!errors.sobreNome}
                helperText={errors.sobreNome?.message}
                sx={{ bgcolor: 'white', borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="Endereço de Email"
                autoComplete="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ bgcolor: 'white', borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                placeholder="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register('senha')}
                error={!!errors.senha}
                helperText={errors.senha?.message}
                sx={{ bgcolor: 'white', borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                placeholder="Confirme sua senha"
                type="password"
                id="confirmationpassword"
                autoComplete="new-password"
                {...register('confirmacaoSenha')}
                error={!!errors.confirmacaoSenha}
                helperText={errors.confirmacaoSenha?.message}
                sx={{ bgcolor: 'white', borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('acceptedTerms')}
                    sx={{
                      color: '#f50057',
                      '&.Mui-checked': { color: '#f50057' },
                    }}
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
            color="tertiary"
            sx={{ mt: 3, mb: 2, borderRadius: 5 }}
          >
            Cadastrar
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link sx={{ color: 'white' }} href="/Login" variant="inherit">
                Já possui uma conta? Entre aqui!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};

export default FormCadastro;
