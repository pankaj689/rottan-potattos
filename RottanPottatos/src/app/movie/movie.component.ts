import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  type = ""
  id = ""
  url = ""
  movies: any;
  ind_movie: any
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type']
    this.id = this.route.snapshot.params['id']
    console.log("this.type", this.type)

    console.log("this.id", this.id)

    if (this.type === "trendingmovies") {
      this.url = 'http://localhost:4200/assets/Data/trending-movies.json'
    } else if (this.type === "popularmovies") {
      this.url = 'http://localhost:4200/assets/Data/theatre-movies.json'
    } else if (this.type === "theatermovies") {
      this.url = 'http://localhost:4200/assets/Data/popular-movies.json'
    }

    this.getmovie();
  }


  getmovie() {
    console.log("getmovie call")
    console.log(this.url)
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;

      console.log("this.movies", this.movies)
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );

      console.log("index", index)

      if (index > -1) {
        this.ind_movie = this.movies[index]
      }
      console.log("ind_movie", this.ind_movie)
    })
    console.log("ind_movie_111", this.ind_movie)

  }


}
