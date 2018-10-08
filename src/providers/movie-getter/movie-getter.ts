import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the MovieGetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieGetterProvider {

  constructor(public httpClient : HttpClient) {
  }

  getMovies(): Observable<Movie[]>{
    var moviesList=[];

    var movie= this.httpClient.get<Movie[]>('http://www.omdbapi.com/?t=coco&apikey=69335388');
    console.log(movie);
    return moviesList;
  }
}
