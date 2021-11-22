import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthguardService } from "../auth-guard.service";

@NgModule({
    declarations:[
      ListPokemonComponent,
      DetailPokemonComponent,
      PokemonFormComponent,
      PokemonTypeColorPipe,
      BorderCardDirective,
      EditPokemonComponent,
      SearchPokemonComponent
    ],
    imports : [
      CommonModule,
      FormsModule,
      PokemonRoutingModule
    ],
    providers:[PokemonService,AuthguardService]
})
export class PokemonsModule {

}
