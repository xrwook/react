import { api } from '../../utils/api';

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean | string;
  random: string;
}

export interface SaveTod {
  id: string;
  name: string;
  createdAt: Date;
  data: null | Record<string, unknown>;
}

export interface GridSearchParams {
  search?: string;
  id: string;
}

export const getTodos = async (
  page: string | number | undefined,
): Promise<Todos[]> => {
  const response = await api.get(
    `https://jsonplaceholder.typicode.com/todos/${page}`,
  );
  const data = response.data;
  if (page) return [data];
  else return data;
};

export const saveTodos = async (data: GridSearchParams): Promise<SaveTod> => {
  const response = await api.post('https://api.restful-api.dev/objects', {
    name: `Apple MacBook Pro ${data.search}`,
    id: data.id,
  });
  console.log(data);
  return response.data;
};
