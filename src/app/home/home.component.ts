import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonDetails } from '../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPokemons().subscribe(
      (response) => {
        this.pokemons = response.results;
        this.pokemons.forEach((pokemon) => {
          this.apiService
            .getPokemonDetails(pokemon.url)
            .subscribe((details: PokemonDetails) => {
              pokemon.image = details.sprites.front_default;
              pokemon.types = details.types
                .map((typeInfo) => typeInfo.type.name)
                .join(', ');
              pokemon.abilities = details.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .join(', ');
              pokemon.stats = details.stats
                .map(
                  (statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`
                )
                .join(', ');
            });
        });
      },
      (error) => {
        console.error('Error fetching Pokémon data', error);
      }
    );
  }
}
