import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { InfoPage} from '../../pages/info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Array<any>;
  constructor(public navCtrl: NavController , private movieService: MovieServiceProvider) {
   
  }

  searchForMovie(event, key) {
    if(event.target.value.length > 2) {
        this.movieService.searchMovies(event.target.value).then((data:any)=>{
          this.movies = data.results; 
                    console.log(data);

        })
      }}

      selectMovie(event, movie) {
        console.log(movie);  
        this.navCtrl.push(InfoPage, {
            movie: movie
        });
    } 


  }
