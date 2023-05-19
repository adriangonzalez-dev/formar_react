import { AbilitiyResponse, ListAbilitiesResponse } from "../interfaces/abilities-interface";
import { ApiPokemonResponse, Pokemon, Result } from "../interfaces/pokemon-interface";
import { instanceAbility, instancePokemon } from "./base";

export const getPokemons = async (page:number):Promise<ApiPokemonResponse> => {
        const {data} = await instancePokemon.get<ApiPokemonResponse>(`?limit=20&offset=${page * 20}}`);
        return data;
    }

export const getPokemon = async (name:string):Promise<Pokemon> => {
        const {data} = await instancePokemon.get(name);
        return data;
    }

export const getAllPokemons = async ():Promise<Result[]>  => {
        const {data} = await instancePokemon.get<ApiPokemonResponse>(`?limit=100000&offset=0`);
        return data.results;
    }

export const getAllAbilities = async ():Promise<ListAbilitiesResponse> => {
        const {data} = await instanceAbility.get<ListAbilitiesResponse>(`?limit=100000&offset=0`);
        return data;
    }

export const GetOneAbility = async (name:string):Promise<AbilitiyResponse> => {
        const {data} = await instanceAbility.get(name);
        return data;
    }

