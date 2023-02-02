import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GametypeComponent } from './gametype/gametype.component';

const routes: Routes = [
  { path: 'gametype', component: GametypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
