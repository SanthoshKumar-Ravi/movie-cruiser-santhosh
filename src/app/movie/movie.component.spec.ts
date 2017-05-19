import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieSearchService } from '../movie-search.service';
import { Headers, Http } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ], schemas: [ NO_ERRORS_SCHEMA, ],
      // providers : [ MovieSearchService ]
      providers:  [{provide: Router, useClass: class { navigate= jasmine.createSpy('params') ; }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
