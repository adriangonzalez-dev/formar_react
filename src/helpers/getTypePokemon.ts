export const getTypePokemon = (typePokemon: string | undefined):string => {
    switch (typePokemon) {
      case 'fire':
        return 'var(--tipo-fuego)';
      case 'water':
        return 'var(--tipo-agua)';
      case 'grass':
        return 'var(--tipo-planta)';
      case 'bug':
        return 'var(--tipo-bicho)';
      case 'normal':
        return 'var(--tipo-normal)';
      case 'poison':
        return 'var(--tipo-veneno)';
      case 'electric':
        return 'var(--tipo-electrico)';
      case 'ground':
        return 'var(--tipo-tierra)';
      case 'fairy':
        return 'var(--tipo-hada)';
      case 'fighting':
        return 'var(--tipo-lucha)';
      case 'psychic':
        return 'var(--tipo-psiquico)';
      case 'rock':
        return 'var(--tipo-roca)';
      case 'ghost':
        return 'var(--tipo-fantasma)';
      case 'ice':
        return 'var(--tipo-hielo)';
      case 'dragon':
        return 'var(--tipo-dragon)';
      case 'dark':
        return 'var(--tipo-siniestro)';
      case 'steel':
        return 'var(--tipo-acero)';
      case 'flying':
        return 'var(--tipo-volador)';
      default:
        return 'var(--tipo-normal)';
    }
  };