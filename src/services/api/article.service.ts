// import { api } from '../../utils/api';
import axios from 'axios';
import { newsApiKey } from '../../utils/config';
import type { GetArticleResponse, GetArticlesProps } from '../../types/article';

export const getArticles = async (
  params: GetArticlesProps,
): Promise<GetArticleResponse> => {
  const { search, page } = params;
  console.log(page);
  const { data } = await axios.get<GetArticleResponse>(
    `https://newsdata.io/api/1/news?${search ? `q=${search}&` : ''}apiKey=${newsApiKey}`,
  );
  return data;
};
