import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityDisplayComponent } from './entity-display/entity-display.component';
import { GamesComponent } from './games/games.component';
import { GamesFormComponent } from './shared/components/forms/games-form/games-form.component';


const routes: Routes = [
  { path: 'games', component: GamesComponent, children: [
    { path: 'create', component: GamesFormComponent },
    { path: 'edit/:id', component: GamesFormComponent },
  ]
 },
  { path: 'gametype', component: EntityDisplayComponent },
  { path: 'player', component: EntityDisplayComponent },
  { path: 'jersey', component: EntityDisplayComponent },
  { path: 'composition', component: EntityDisplayComponent },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
