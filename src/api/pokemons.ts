import { ApiPokemonResponse } from "../interfaces/pokemon-interface";
import { instance } from "./base";

export const getPokemons = async () => {
        const {data} = await instance.get<ApiPokemonResponse>('/');
        return data;
    }

export const getPokemon = async (name:string) => {
        const {data} = await instance.get(name);
        return data;
    }
