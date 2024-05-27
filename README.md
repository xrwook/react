read
code --list-extensions > extensions.list

code --list-extensions | % { "code --install-extension $_" }


tsrafce
http://mwkorea.ipdisk.co.kr:80/publist/VOL1/mwk_share/Hyundai-EVPlatform-BO/20240514-Hyundai-EVPlatform-BO.zip 





const oriData: Record<string, any>  = { ...data };

  for (const listKey in oriData.filterList) {
    oriData.filterList[listKey] = oriData.filterList[listKey].map((x: any) => {
      const newItem = [];
      for (const key in x) {
        newItem.push({ id: key, name: x[key] });
      }
      return newItem;
    });
  }

  console.log(oriData)



===========


import { type SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../common/Button';
import Input from '../../common/Input/Input';
import { loginSchema } from '../../utils/validation';
import { useLoginQuery } from '../../services/queries/auth.query';
import useAuthStore from '../../store/useAuthStore';
import { type LoginBody } from '../../types/auth';
import Select from 'common/Select';

const Login = () => {
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

  interface Obj {
    id: string;
    option: Option[];
  }

  interface Option {
    label: number;
    value: string;
  }

  const [value, setValue] = useState<any>({
    a: '',
    b: '',
  });
  const [op] = useState<Obj[]>([
    {
      id: 'a',
      option: [
        { label: 1, value: '1' },
        { label: 2, value: '2' },
        { label: 3, value: '4' },
      ],
    },
    {
      id: 'b',
      option: [
        { label: 4, value: '4' },
        { label: 5, value: '5' },
        { label: 6, value: '6' },
      ],
    },
  ]);

  const handleChange = (e: Option, key: string) => {
    setValue({ ...value, [key]: e.value });
  };

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <form
      className="m-auto w-[90%] md:w-[30%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-center text-sm mb-2">Username: user </p>
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
      <Button
        children="Login"
        type="submit"
        isLoading={isLoading}
        $size={'small'}
        $variant={'primary'}
      />
      {op &&
        op.map((item) => (
          <>
            <div>{item.id}</div>
            <div>{value[item.id]}</div>
            <Select
              key={item.id}
              options={item.option}
              value={{ label: 1, value: '1' }}
              placeholder="Select"
              classNamePrefix="react-select"
              isSelectAll={true}
              onChange={(e: Option) => handleChange(e, item.id)}
            />
          </>
        ))}
      {console.log(value)}
    </form>
  );
};

export default Login;
