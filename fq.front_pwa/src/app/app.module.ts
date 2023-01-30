import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './bottom-sheets/results/results.component';
import { GamesDisplayComponent } from './games-display/games-display.component';
import { GuessJerseyComponent } from './guess-jersey/guess-jersey.component';
import { GuessPlayerComponent } from './guess-player/guess-player.component';
import { HomeComponent } from './home/home.component';
import { GuessCompositionComponent } from './guess-composition/guess-composition.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesDisplayComponent,
    ResultsComponent,
    GuessPlayerComponent,
    GuessJerseyComponent,
    GuessCompositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {
        disableClose: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }