import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public movies_list=[
    {Title:"ER",Year:"1994–2009",Rated:"TV-14",Released:"19 Sep 1994",Runtime:"44 min",Genre:"Drama, Romance"},
    {Title:"Mee Pok Man",Year:"1996",Rated:"N/A",Released:"24 Nov 1996",Runtime:"105 min",Genre:"Drama, Romance"},
    {Title:"Pierre",Year:"1985",Rated:"N/A",Released:"N/A",Runtime:"5 min",Genre:"Animation, Comedy, Short"},
    {Title:"Coco",Year:"2017",Rated:"PG",Released:"22 Nov 2017",Runtime:"105 min",Genre:"Animation, Adventure, Comedy"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
