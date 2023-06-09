import { getPokemons } from "../../../api/pokemons";
import { ApiPokemonResponse } from "../../../interfaces/pokemon-interface";
import { AppDispatch } from "../../index";
import { setPokemons, startLoadingPokemons } from "./pokemons";

export const setPokemonsApi = (page:number) => async (dispatch: AppDispatch) => {
    startLoadingPokemons();
    const data:ApiPokemonResponse = await getPokemons(page);
    dispatch(setPokemons(data));
}