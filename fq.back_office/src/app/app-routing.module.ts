import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityDisplayComponent } from './entity-display/entity-display.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'gametype', component: EntityDisplayComponent },
  { path: 'player', component: EntityDisplayComponent },
  { path: 'jersey', component: EntityDisplayComponent },
  { path: 'composition', component: EntityDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
