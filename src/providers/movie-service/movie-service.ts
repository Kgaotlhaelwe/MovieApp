import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }

  searchMovies(movieName){
    var apikey = "https://api.themoviedb.org/3/movie/550?api_key=453ddcd24796b201ff1f5d9a6d279199"
    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }

}
