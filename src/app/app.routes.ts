import { Routes } from "@angular/router";
import { ArtistComponent } from "./components/artist/artist.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, //1 RUTA, el home va a tener el component, HomeComponent.
    { path:  'search', component: SearchComponent}, //2 RUTA, el search va a tener el component, SearchComponent.
    { path:  'artist/:id', component: ArtistComponent}, //3 RUTA, "/:id", dice que si no resivo el id, esa ruta jamas va a entrar.
    { path: '', pathMatch: 'full', redirectTo: 'home' }, //comodin para que cualquier otra ruta o path redireccione al home(cualquier path vacio).  
    { path: '**', pathMatch: 'full', redirectTo: 'home' } //cualquier otra ruta redireccione al home (no importa cual sea, todas menos el home y search).  
];