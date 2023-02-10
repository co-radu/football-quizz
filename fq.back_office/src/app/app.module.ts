import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompositionsFormComponent } from './compositions/compositions-form/compositions-form.component';
import { CompositionsListComponent } from './compositions/compositions-list/compositions-list.component';
import { GamesFormComponent } from './games/games-form/games-form.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GametypesFormComponent } from './gametypes/gametypes-form/gametypes-form.component';
import { GametypesListComponent } from './gametypes/gametypes-list/gametypes-list.component';
import { JerseysFormComponent } from './jerseys/jerseys-form/jerseys-form.component';
import { JerseysListComponent } from './jerseys/jerseys-list/jerseys-list.component';
import { LayoutComponent } from './layout/layout.component';
import { PlayersFormComponent } from './players/players-form/players-form.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { CreateEditFormComponent } from './shared/components/create-edit-form/create-edit-form.component';
import { DisplayDataTableComponent } from './shared/components/display-data-table/display-data-table.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GametypesListComponent,
    PlayersListComponent,
    JerseysListComponent,
    CompositionsListComponent,
    GamesListComponent,
    DisplayDataTableComponent,
    CreateEditFormComponent,
    LayoutComponent,
    NavbarComponent,
    GamesFormComponent,
    GametypesFormComponent,
    JerseysFormComponent,
    PlayersFormComponent,
    CompositionsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
