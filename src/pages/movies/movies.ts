import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieGetterProvider} from '../../providers/movie-getter/movie-getter';
/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  private value = "";
  movieTitle = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, public movieGetter : MovieGetterProvider) {
  }

  ionViewDidLoad() {
  }

  onKey(event: any) { // without type info
    this.value = event.target.value;
    this.movieGetter.getMovies(this.value);
  }

  

}
