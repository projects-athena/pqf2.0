import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';
import { IFormInput } from '@/app/types/types';

export const useFormCadastro = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    router.push('/Login');
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};
