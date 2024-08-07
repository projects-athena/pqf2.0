import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../utils/validationSchema';
import { ILoginFormInput } from '@/app/types/types';
import { useAuth } from '@/app/context/AuthContext';

export const useFormLogin = () => {

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'success' | 'error'>('success');

  const { login } = useAuth();

  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = data => {

    switch (login(data.email, data.senha))
    {
      case 1:
        setToastMessage(`Seja Bem Vindo de volta!`);
        setToastSeverity('success');
        router.push('/');
      case 0: 
        setToastMessage('Email ou Senha Incorretos.');
        setToastSeverity('error');
      case -1:
        setToastMessage('Usuário não encontrado. Por favor, crie uma conta.');
        setToastSeverity('error');
    }
    setToastOpen(true);


    /*const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      if (parsedUser.email === data.email && parsedUser.senha === data.senha) {
        setUser(parsedUser);
        setToastMessage(`Seja Bem Vindo de volta, ${parsedUser.nome}!`);
        setToastSeverity('success');
        router.push('/homeUser');
      } else {
        setToastMessage('Email ou Senha Incorretos.');
        setToastSeverity('error');
      }
    } else {
      setToastMessage('Usuário não encontrado. Por favor, crie uma conta.');
      setToastSeverity('error');
    }
    setToastOpen(true);*/
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    toastOpen,
    toastMessage,
    toastSeverity,
    handleToastClose,

  };
};
