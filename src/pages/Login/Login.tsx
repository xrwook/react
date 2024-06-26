import { type SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../common/Button';
import Input from '../../common/Input/Input';
import { loginSchema } from '../../utils/validation';
import { useLoginQuery } from '../../services/queries/auth.query';
import useAuthStore from '../../store/useAuthStore';
import { type LoginBody } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { isLoading, mutateAsync: login, isError, error } = useLoginQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    await login(data);
    setIsAuthenticated(true);
  };

  const goTest = () => {
    navigate('/test');
  };

  return (
    <>
      <form
        className="m-auto w-[90%] md:w-[30%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button text="로그인" onClick={goTest} isLoading={isLoading} />
        <p className="text-center text-sm mb-2">Username: user</p>
        <p className="text-center text-sm mb-3">Password: user</p>
        <Input
          errors={errors}
          placeholder="Username"
          label="Username"
          id="username"
          register={register}
          name="username"
        />
        <Input
          errors={errors}
          placeholder="Password"
          label="Password"
          type="password"
          register={register}
          name="password"
        />
        <Button text="Login" type="submit" isLoading={isLoading} />
      </form>
    </>
  );
};

export default Login;
