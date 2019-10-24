import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AllMoviesComponent },
      { path: 'movies', component: AllMoviesComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'allmovies/:allmovieId', component: MovieDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AllMoviesComponent,
    FavouritesComponent,
    FooterComponent,
    MovieDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
