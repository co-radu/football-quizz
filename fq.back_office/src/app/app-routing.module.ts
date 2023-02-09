import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositionsListComponent } from './compositions-list/compositions-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GametypesListComponent } from './gametypes-list/gametypes-list.component';
import { JerseysListComponent } from './jerseys-list/jerseys-list.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { CreateEditFormComponent } from './shared/components/create-edit-form/create-edit-form.component';


const routes: Routes = [
  {
    path: 'games', component: GamesListComponent, children: [
      { path: 'create', component: CreateEditFormComponent },
      { path: 'edit/:id', component: CreateEditFormComponent },
    ]
  },
  {
    path: 'gametypes', component: GametypesListComponent, children: [
      { path: 'create', component: CreateEditFormComponent },
      { path: 'edit/:id', component: CreateEditFormComponent },
    ]
  },
  {
    path: 'players', component: PlayersListComponent, children: [
      { path: 'create', component: CreateEditFormComponent },
      { path: 'edit/:id', component: CreateEditFormComponent },
    ]
  },
  {
    path: 'jerseys', component: JerseysListComponent, children: [
      { path: 'create', component: CreateEditFormComponent },
      { path: 'edit/:id', component: CreateEditFormComponent },
    ]
  },
  {
    path: 'compositions', component: CompositionsListComponent, children: [
      { path: 'create', component: CreateEditFormComponent },
      { path: 'edit/:id', component: CreateEditFormComponent },
    ]
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }