import {API_URL} from 'constants/api';
import {Fetcher} from 'utils/fetcher';
import {API} from './constants';

const fetcher = new Fetcher({baseURL: API_URL});

export const getPokedexService = (params?: any): Promise<any> =>
  fetcher.request({
    url: API.pokemon,
    params,
  });

export const getPokemonsService = (url: string, params?: any): Promise<any> =>
  fetcher.request({
    url,
    params,
  });
