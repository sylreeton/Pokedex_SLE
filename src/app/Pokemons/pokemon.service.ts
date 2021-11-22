import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { find } from 'rxjs/operators';
import { Pokemon } from "./pokemon";
@Injectable()
export class PokemonService{
  private PokemonUrl= 'api/pokemons';
 // Retourne tous les pokémons
 constructor (private http: HttpClient){}
 getPokemons(): Observable <Pokemon[]> {
  return this.http.get<Pokemon[]>(this.PokemonUrl);
}

 // Retourne le pokémon avec l'identifiant passé en paramètre
 getPokemon(id : number): Observable<Pokemon>{
  const url = `${this.PokemonUrl}/${id}`
  return this.http.get<Pokemon>(url);
 }

 updatePokemon(pokemon: Pokemon) : Observable<Pokemon> {
   const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   }
return this.http.put<Pokemon>(this.PokemonUrl, pokemon , httpOptions)

}
 // Retourne tous les types de pokémon
 getPokemonTypes(): Array<string> {

  return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',

      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

}
searchPokemons(term:string) : Observable<Pokemon[]>{
  if(!term.trim()){
    return of([]);
  }
  return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`);
}

Delete(pokemon: Pokemon) : Observable<Pokemon> {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  const url = `${this.PokemonUrl}/${pokemon.id}`
return this.http.delete<Pokemon>(url)
}
}
