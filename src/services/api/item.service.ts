import axios from 'axios';
import { type ItemApiResponse } from '../../types/items';

export const getItems = async (): Promise<ItemApiResponse> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  return response.data.results;
};
