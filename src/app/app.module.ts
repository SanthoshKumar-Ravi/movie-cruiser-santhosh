import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { MovieAppMaterialModule } from './movie-app-material.module';
import { MovieSearchService} from './movie-search.service';
import { SearchComponent } from './search/search.component';
// import {Router} from '@angular/router';
import { MovieModule } from './movie/movie.module';
import { MovieComponent } from './movie/movie.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchModule } from './search/search.module';

const routes: Routes = [
  { path: 'movie/:movie_Name',  component: MovieComponent }
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
    exports: [ RouterModule ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [ RouterModule.forRoot(routes) ],
    MovieModule,
    SearchModule
    ],
  providers: [ MovieSearchService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
