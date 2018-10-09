import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* 
  Generated class for the MovieGetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieGetterProvider {

  public config;
  public moviesList=[];

  constructor(public httpClient : HttpClient) {
    var i;
    this.getMovies("blue");
  }

  getMovies(searchString) {
    var request = this.httpClient.get('http://www.omdbapi.com/?t='+searchString+'&plot=full&apikey=69335388')
    request.subscribe(
      data => { this.moviesList.push( data ); console.log(data); },
      err => console.error(err),
      () => console.log('Movie Done')
    );
  }
}
