import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';
import { UserInfo } from '../types/user';

interface UserInfoState {
  user: UserInfo;
  setUser: (user: UserInfo) => void;
}

const useUserInfo = create<UserInfoState>()(
  persist(
    devtools(
      immer((set) => ({
        user: {} as UserInfo,
        setUser: (user) => {
          set({ user });
        },
      })),
    ),
    { name: 'userInfo' },
  ),
);

export default useUserInfo;
