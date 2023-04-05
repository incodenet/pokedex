import {createSelector} from '@reduxjs/toolkit';
import {State} from 'store/types';
import {AppState} from './types';

const getState = (state: State): AppState => state.app;

export const appLoadingSelector = createSelector(getState, state => state.loading);
export const appErrorsSelector = createSelector(getState, state => state.errors);
export const appPokeCountSelector = createSelector(getState, state => state.pokeCount);
export const appPokemonsSelector = createSelector(getState, state => state.pokemons);
export const appPokedexSelector = createSelector(getState, state => state.pokedex);
