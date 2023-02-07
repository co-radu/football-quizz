import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesFormComponent } from './shared/components/forms/games-form/games-form.component';


const routes: Routes = [
  {
    path: 'games', component: GamesListComponent, children: [
      { path: 'create', component: GamesFormComponent },
      { path: 'edit/:id', component: GamesFormComponent },
    ]
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }