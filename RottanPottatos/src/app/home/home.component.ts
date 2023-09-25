import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingmovies:any;
  popularmovies_list :any;
  theatermovies_list:any;
  constructor( private http:HttpClient , private _routers:Router){

  }

  ngOnInit(){
    this.getTrendingMovies();
    this.popularmovies();
    this.theatermovies();

  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/Data/trending-movies.json').subscribe((movies)=>{
this.trendingmovies= movies;
//console.log(this.trendingmovies)
    })

  }
  popularmovies(){
    this.http.get('http://localhost:4200/assets/Data/theatre-movies.json').subscribe((movies)=>{
this.popularmovies_list= movies;
console.log(this.popularmovies_list)
    })

  }

  theatermovies(){
    this.http.get('http://localhost:4200/assets/Data/popular-movies.json').subscribe((movies)=>{
this.theatermovies_list= movies;
console.log(this.theatermovies_list)
    })

  }

  gotomovies(type:string , id:string){
    this._routers.navigate(["movie",type,id])
  }

}
