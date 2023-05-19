import axios from 'axios';

export const instancePokemon = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
});

export const instanceAbility = axios.create({
    baseURL: import.meta.env.VITE_URL_API_ABILITY,
});