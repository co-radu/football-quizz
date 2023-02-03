import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositionComponent } from './composition/composition.component';
import { GamesComponent } from './games/games.component';
import { GametypeComponent } from './gametype/gametype.component';
import { JerseyComponent } from './jersey/jersey.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'gametype', component: GametypeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'jersey', component: JerseyComponent },
  { path: 'composition', component: CompositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
