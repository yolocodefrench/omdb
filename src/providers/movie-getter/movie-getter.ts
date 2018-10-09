import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
/* 
  Generated class for the MovieGetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieGetterProvider {

  public config;
  public moviesList=[];

  constructor(public httpClient : HttpClient, private toastController: ToastController) {
    var i;
    this.getMovies("blue");
  }

  getMovies(searchString) {
    this.moviesList=[];
    var request = this.httpClient.get('http://www.omdbapi.com/?s='+searchString+'*&page=2&apikey=69335388')
    request.subscribe(
      data => {  
        //console.log(data);
        if('Search' in data){
          data.Search.map((movieSimple) =>{
            var movieRequest=this.httpClient.get('http://www.omdbapi.com/?i='+movieSimple.imdbID+'&plot=full&apikey=69335388')
            movieRequest.subscribe(data => {  
              this.moviesList.push(data);
              console.log(data); 
            },
            err => console.error(err+" for "+movieSimple.Title),
            () => console.log('Movie' +movieSimple.Title +'Done')
          );
          })
        }
      },
      err => console.error(err),
      () => console.log('Movie Done')
    );
  }

  
   /* showNotFoundToast() {
      let toast = this.toastController.create({
        message: 'To mutch movies found!',
        duration: 300000,
        position: 'middle',
        cssClass: 'toastAlert'
      });

      toast.onDidDismiss(() => {
        
      });

      toast.present();
    }*/
}
