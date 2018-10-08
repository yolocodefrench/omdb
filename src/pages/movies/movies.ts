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
  public movies_list;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieGetter : MovieGetterProvider) {
    this.movies_list=movieGetter.getMovies();
  }

  ionViewDidLoad() {
  }

  

}
