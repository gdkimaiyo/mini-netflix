import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { allmovies } from '../allmovies';
import { FavouritesService } from '../favourites.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  // defining movie property
  allmovie;

  addToFavourites(allmovie) {
    console.log('Movie added successfully...');
    this.favouritesService.addToFavourites(allmovie);
  }

  // Inject ActivateRoute into the constructor
  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService,
  ) { }

  ngOnInit() {
    // subscribe to route params and fetch the movie based on the allmovieId
    this.route.paramMap.subscribe(params => {
      this.allmovie = allmovies[+params.get('allmovieId')];
    });
  }

}
