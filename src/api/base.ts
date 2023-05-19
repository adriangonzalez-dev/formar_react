import axios from 'axios';

export const instancePokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const instanceAbility = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/ability/',
});