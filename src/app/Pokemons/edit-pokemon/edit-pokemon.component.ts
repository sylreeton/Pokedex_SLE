import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute,private _pokemonService: PokemonService) { }

  ngOnInit() {
let id = +this.route.snapshot.paramMap.get('id');
    this._pokemonService.getPokemon(id).subscribe(data => { this.pokemon = data });

  }

}
