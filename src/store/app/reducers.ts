import {PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './types';

export const AppReducers = {
  setLoading(state: AppState, {payload}: PayloadAction<AppState['loading']>) {
    state.loading = payload;
  },
  setPokeCount(state: AppState, {payload}: PayloadAction<number>) {
    state.pokeCount = payload;
  },
  setErrors(state: AppState, {payload}: PayloadAction<string>) {
    state.errors = [...state.errors, payload];
  },
  setPokedex(state: AppState, {payload}: PayloadAction<AppState['pokedex']>) {
    state.pokedex = payload;
  },
  setPokemons(state: AppState, {payload}: PayloadAction<AppState['pokemons']>) {
    state.pokemons = payload;
  },
};
