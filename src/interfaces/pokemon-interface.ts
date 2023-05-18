export interface ApiPokemonResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface PokemonInitialState {
    data: Result[],
    isLoading: boolean,
    next: string,
    previous: string,
}