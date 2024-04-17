import { useMutation } from '@tanstack/react-query';
import { type LoginBody } from '../../types/auth';
import { login } from '../api/auth.service';

// useMutation은 데이터를 생성(POST), 수정(PUT), 삭제(DELETE)하는 API 요청을 처리하고 관리하는 훅
export const useLoginQuery = () =>
  useMutation(['login'], async (body: LoginBody) => {
    const res = await login(body);
    return res;
  });
