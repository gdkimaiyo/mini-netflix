import { Component, OnInit } from '@angular/core';
import { allmovies } from '../allmovies';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  allmovies = allmovies;

  constructor() { }

  ngOnInit() {
  }

}
