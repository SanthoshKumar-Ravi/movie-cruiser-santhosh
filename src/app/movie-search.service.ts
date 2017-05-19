import { Injectable , OnInit , Component } from '@angular/core';
import { MovieTemplate } from './model/movieTemplate';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieSearchService {
private moviesUrl = 'http://www.omdbapi.com/?t=';
  constructor(private http: Http) { }

  // getMovies(movie_Name){
  //  this.moviesUrl=this.moviesUrl+movie_Name;
  //  console.log(this.moviesUrl);
  // }
//   getMovies(na  me: String): Promise<movie_template> {
//   const url = `${this.moviesUrl}${name}&y=&plot=short&r=json`;
//   console.log(url);
//   return this.http.get(url)
//     .toPromise()
//     .then(response => response.json().data as movie_template)
//     .catch();
// }
getMovies(path: string) {
    return this.http
      .get('http://www.omdbapi.com/?s=' + path)
      .map((res) => res.json().Search  || [] );
    }
}
