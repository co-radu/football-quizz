import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompositionsListComponent } from './compositions-list/compositions-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GametypesListComponent } from './gametypes-list/gametypes-list.component';
import { JerseysListComponent } from './jerseys-list/jerseys-list.component';
import { LayoutComponent } from './layout/layout.component';
import { PlayersListComponent } from './players-list/players-list.component';
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
