import {NameAndUrl} from './../../types/api';
import {Pokemon} from 'types/api';

export type AppState = {
  loading: boolean;
  errors: string[];
  pokeCount: number;
  pokedex: NameAndUrl[];
  pokemons: Pokemon[];
};
