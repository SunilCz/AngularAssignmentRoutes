export interface PokemonType {
  type: { name: string };
}

export interface PokemonAbility {
  ability: { name: string };
}

export interface PokemonStat {
  stat: { name: string };
  base_stat: number;
}

export interface PokemonDetails {
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}
