import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositionsFormComponent } from './compositions/compositions-form/compositions-form.component';
import { CompositionsListComponent } from './compositions/compositions-list/compositions-list.component';
import { GamesFormComponent } from './games/games-form/games-form.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GametypesFormComponent } from './gametypes/gametypes-form/gametypes-form.component';
import { GametypesListComponent } from './gametypes/gametypes-list/gametypes-list.component';
import { JerseysFormComponent } from './jerseys/jerseys-form/jerseys-form.component';
import { JerseysListComponent } from './jerseys/jerseys-list/jerseys-list.component';
import { PlayersFormComponent } from './players/players-form/players-form.component';
import { PlayersListComponent } from './players/players-list/players-list.component';


const routes: Routes = [
  {
    path: 'games', component: GamesListComponent, children: [
      { path: 'create', component: GamesFormComponent },
      { path: 'edit/:id', component: GamesFormComponent },
    ]
  },
  {
    path: 'gametypes', component: GametypesListComponent, children: [
      { path: 'create', component: GametypesFormComponent },
      { path: 'edit/:id', component: GametypesFormComponent },
    ]
  },
  {
    path: 'players', component: PlayersListComponent, children: [
      { path: 'create', component: PlayersFormComponent },
      { path: 'edit/:id', component: PlayersFormComponent },
    ]
  },
  {
    path: 'jerseys', component: JerseysListComponent, children: [
      { path: 'create', component: JerseysFormComponent },
      { path: 'edit/:id', component: JerseysFormComponent },
    ]
  },
  {
    path: 'compositions', component: CompositionsListComponent, children: [
      { path: 'create', component: CompositionsFormComponent },
      { path: 'edit/:id', component: CompositionsFormComponent },
    ]
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }