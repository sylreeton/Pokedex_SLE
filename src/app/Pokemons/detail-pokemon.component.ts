import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../Pokemons/pokemon";
import { PokemonService } from "./pokemon.service";
@Component({
  selector: "detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;
  constructor(private route: ActivatedRoute, private router: Router,private _PokemonService: PokemonService) {}
  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get("id");
    this._PokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data})

  }
  goBack() {
    this.router.navigate(["/pokemon/all"]);
  }

  goEdit(pokemon: Pokemon){
      let link=['/pokemon/edit',pokemon.id];
      this.router.navigate(link)
  }

  goDelete(pokemon: Pokemon){
      this._PokemonService.Delete(this.pokemon).subscribe(()=>{

        this.router.navigate(["/pokemons"]);

      })

  }
}
