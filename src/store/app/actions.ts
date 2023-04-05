import {NameAndUrl} from 'types/api';
import {ActionTypesEnum} from './enums';

export const getPokedexAction = (payload?: {limit?: number}) => ({
  type: ActionTypesEnum.POKEDEX_GET,
  payload,
});

export const getPokemonsAction = (payload?: {pokes?: NameAndUrl}) => ({
  type: ActionTypesEnum.POKEMONS_GET,
  payload,
});
