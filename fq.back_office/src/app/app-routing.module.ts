import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesFormComponent } from './shared/components/forms/games-form/games-form.component';
import { GametypesListComponent } from './gametypes-list/gametypes-list.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { JerseysListComponent } from './jerseys-list/jerseys-list.component';
import { CompositionsListComponent } from './compositions-list/compositions-list.component';


const routes: Routes = [
  {
    path: 'games', component: GamesListComponent, children: [
      { path: 'create', component: GamesFormComponent },
      { path: 'edit/:id', component: GamesFormComponent },
    ]
  },
  {
    path: 'gametypes', component: GametypesListComponent, children: [
      { path: 'create', component: GametypesListComponent },
      { path: 'edit/:id', component: GametypesListComponent },
    ]
  },
  {
    path: 'players', component: PlayersListComponent, children: [
      { path: 'create', component: PlayersListComponent },
      { path: 'edit/:id', component: PlayersListComponent },
    ]
  },
  {
    path: 'jerseys', component: JerseysListComponent, children: [
      { path: 'create', component: JerseysListComponent },
      { path: 'edit/:id', component: JerseysListComponent },
    ]
  },
  {
    path: 'compositions', component: CompositionsListComponent, children: [
      { path: 'create', component: CompositionsListComponent },
      { path: 'edit/:id', component: CompositionsListComponent },
    ]
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }