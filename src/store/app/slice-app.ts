import {createSlice} from '@reduxjs/toolkit';
import {AppReducers} from './reducers';

const sliceApp = createSlice({
  name: 'app',
  initialState: {
    loading: false,
    errors: [],
    pokeCount: 0,
    pokedex: [],
    pokemons: [],
  },
  reducers: AppReducers,
});

export const {setPokemons, setPokedex, setPokeCount, setLoading, setErrors} = sliceApp.actions;

export const appReducer = sliceApp.reducer;
