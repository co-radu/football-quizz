import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompositionComponent } from './shared/components/composition/composition.component';
import { GamesComponent } from './games/games.component';
import { GametypeComponent } from './shared/components/gametype/gametype.component';
import { PlayerComponent } from './shared/components/player/player.component';
import { JerseyComponent } from './shared/components/jersey/jersey.component';
import { EntityDisplayComponent } from './entity-display/entity-display.component';
import { DisplayDataTableComponent } from './shared/components/display-data-table/display-data-table.component';
import { GamesFormComponent } from './shared/components/forms/games-form/games-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GametypeComponent,
    PlayerComponent,
    JerseyComponent,
    CompositionComponent,
    GamesComponent,
    EntityDisplayComponent,
    DisplayDataTableComponent,
    GamesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
