import { ListAbilitiesResponse } from "../interfaces/abilities-interface";
import { ApiPokemonResponse } from "../interfaces/pokemon-interface";
import { instanceAbility, instancePokemon } from "./base";

export const getPokemons = async (page:number) => {
        const {data} = await instancePokemon.get<ApiPokemonResponse>(`?limit=20&offset=${page * 20}}`);
        return data;
    }

export const getPokemon = async (name:string) => {
        const {data} = await instancePokemon.get(name);
        return data;
    }

export const getAllPokemons = async () => {
        const {data} = await instancePokemon.get<ApiPokemonResponse>(`?limit=100000&offset=0`);
        return data.results;
    }

export const getAllAbilities = async () => {
        const {data} = await instanceAbility.get<ListAbilitiesResponse>(`?limit=100000&offset=0`);
        return data;
    }

export const GetOneAbility = async (name:string) => {
        const {data} = await instanceAbility.get(name);
        return data;
    }

