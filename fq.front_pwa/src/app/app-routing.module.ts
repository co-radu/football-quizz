import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuessPlayerComponent } from './guess-player/guess-player.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'guess_player', component: GuessPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
