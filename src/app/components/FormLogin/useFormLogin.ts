import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../utils/validationSchema';
import { ILoginFormInput } from '@/app/types/types';

export const useFormLogin = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginValidationSchema),
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

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};
