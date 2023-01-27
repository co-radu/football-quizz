import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDisplayComponent } from './games-display/games-display.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'games_display',
    component: GamesDisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
