import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { Item } from '../types/items';

interface ItemsState {
  items: Item[];
  setData: (items: Item[]) => void;
}

// store에서 state 만든 부분.
// 스토어를 만들 때는 create 함수를 이용하여 상태와 그 상태를 변경하는 액션을 정의
const useItemsStore = create<ItemsState>()(
  persist(
    devtools(
      immer((set) => ({
        items: [],
        setData: (items) => {
          set({ items });
        },
      })),
    ),
    { name: 'itemsStore', storage: createJSONStorage(() => sessionStorage) },
  ),
);

export default useItemsStore;
