import { createSlice } from '@reduxjs/toolkit'
import { PokemonInitialState } from '../../../interfaces/pokemon-interface';

const initialState:PokemonInitialState = {
  data: [],
  isLoading: false,
  next: '',
  previous: '',
}

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.data = action.payload.results
      state.next = action.payload.next
      state.previous = action.payload.previous
      state.isLoading = false
    },
  },
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions