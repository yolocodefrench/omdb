import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage } from './movies';
import { MovieGetterProvider } from '../../providers/movie-getter/movie-getter';

@NgModule({
  declarations: [
    MoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
  providers: [
    MovieGetterProvider
  ]
})
export class MoviesPageModule {}
