import { useQuery } from '@tanstack/react-query';
import { getItems } from '../api/item.service';
import useItemStore from '../../store/useItemStore';


export const useItemsQuery = () => {
  const { setData } = useItemStore();

  // React-query : React Application에서 서버의 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트 하는 작업을 도와주는 라이브러리
  // 데이터 패칭하기 위한 hook
  useQuery(['get-items'], async () => {
      const res = await getItems();
      return res;
  }, {
    onSuccess: setData,
    refetchOnWindowFocus: false
  })
};
