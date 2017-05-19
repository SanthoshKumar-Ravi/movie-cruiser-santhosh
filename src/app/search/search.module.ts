import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AppComponent } from './app.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
//import { MovieAppMaterialModule } from './movie-app-material.module';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { MovieSearchService} from '../movie-search.service';
import { SearchComponent } from './search.component';
// import {Router} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

const routes: Routes = [
  { path: 'movie/:movie_Name',  component: MovieComponent }
 ];

@NgModule({
  declarations: [
    SearchComponent
  ],
    exports: [ RouterModule ,SearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [ RouterModule.forRoot(routes) ],
  ],
  //providers: [ MovieSearchService ],
  // bootstrap: [AppComponent]
})

export class SearchModule { }
