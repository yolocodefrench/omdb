import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../pages/movies/Movie';
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
    for(i=0;i<50;i++)
      this.getMovies();
  }

  getMovies() {
    this.httpClient.get('http://www.omdbapi.com/?t=coco&apikey=69335388').subscribe(
      data => { this.moviesList.push( data ); console.log(data) },
      err => console.error(err),
      () => console.log('Movie Done')
    );
  }
}
