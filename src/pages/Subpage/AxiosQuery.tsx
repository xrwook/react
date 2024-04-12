import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import axios, { AxiosResponse } from 'axios';

export const AxiosQuery = () => {
  const [data, setData] = useState<AxiosResponse | null | void>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://mypocketbase.fly.dev/api/collections/products/records')
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <>Loading...</>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="text-4xl"> AxiosQuery</div>
      <ul className="list-disc p-4">
        {data &&
          data.data?.items?.map(
            (product: {
              id: Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              price:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
            }) => (
              <li key={product.id}>
                {product.name} / {product.price}
              </li>
            ),
          )}
      </ul>
    </>
  );
};
