import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './slices/pokemons/pokemons'

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch