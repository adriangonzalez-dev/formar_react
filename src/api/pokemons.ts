import { ApiPokemonResponse } from "../interfaces/pokemon-interface";
import { instance } from "./base";

export const getPokemons = async (page:number) => {
        const {data} = await instance.get<ApiPokemonResponse>(`?limit=20&offset=${page * 20}}`);
        return data;
    }

export const getPokemon = async (name:string) => {
        const {data} = await instance.get(name);
        return data;
    }
