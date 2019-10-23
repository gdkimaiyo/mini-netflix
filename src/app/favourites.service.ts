import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites = [];

  addToFavourites(allmovie) {
    this.favourites.push(allmovie);
  }

  getFavourites() {
    return this.favourites;
  }

  clearFavourites() {
    this.favourites = [];
    return this.favourites;
  }
}
