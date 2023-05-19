import { createSlice } from '@reduxjs/toolkit'
import { PokemonInitialState, Result } from '../../../interfaces/pokemon-interface';

const initialState:PokemonInitialState = {
  data: [],
  selected: [],
  isLoading: false,
  next: '',
  previous: '',
  searchPokemons: [],
  searchLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.data = [...state.data, ...action.payload.results]
      state.next = action.payload.next
      state.previous = action.payload.previous
      state.isLoading = false
    },
    addSelectedPokemons: (state, action) => {
      state.selected.push(action.payload.name)
    },
    removeSelectedPokemons: (state, action) => {
      state.selected = state.selected.filter((item) => item !== action.payload.name)
    },
    deleteSelectedPokemons: (state) => {
      state.data = state.data = state.data.filter((item) => !state.selected.includes(item.name))
      state.selected = initialState.selected
    },
    setLoadingSearchPokemons : (state) => {
      state.searchLoading = true
    },
    searchPokemons : (state, action) => {
      state.searchPokemons = action.payload
    }
  },
})

export const { 
  startLoadingPokemons, 
  setPokemons, 
  addSelectedPokemons,
  removeSelectedPokemons,
  deleteSelectedPokemons,
  setLoadingSearchPokemons,
  searchPokemons } = pokemonSlice.actions