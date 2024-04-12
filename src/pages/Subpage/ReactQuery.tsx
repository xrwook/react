import { useQuery } from '@tanstack/react-query';
import useItemStore from '../../store/useItemStore';
import { getItems } from '../../services/api/item.service';

export const ReactQuery = () => {
  const { setData } = useItemStore();
  // useQuery로 가져온 데이터는 아래와 같이 data로 꺼내올 수 있음.
  // useQuery는 GET, POST 메소드 포함을 기반으로 서버에서 데이터를 패칭하기 위한 비동기 함수와 사용됨.
  /*
    - isLoading or status === 'loading' : 현재 데이터를 요청 중이나 아직 데이터가 없을 경우
    - isError or status === 'error': 쿼리에서 에러가 났을 경우
        ☞error : 해당 property로 에러 메세지를 확인할 수 있다.
    - isSuccess or status === 'success' - 쿼리 요청 성공
        ☞ data : 해당 property로 성공한 데이터를 확인할 수 있다.
    - isIdle or status === 'idle': 이 쿼리는 현재 사용할 수 없을 때 나옴
    - isFetching : 데이터 요청 중일 때는 (내부적으로 리패칭 중 일때도 포함) 항상 True를 리턴한다
    */
  // query key로 캐싱을 관리함.
  const { data, isLoading, isError, error } = useQuery(
    ['get-items'],
    getItems,
    {
      onSuccess: setData,
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error}</>;

  const itemsList =
    data?.map((item: any) => <li key={item.url}>{item.name}</li>) || [];

  return (
    <>
      <ul className="list-disc p-4">
        <li>
          <ul>{itemsList}</ul>
        </li>
      </ul>
    </>
  );
};
