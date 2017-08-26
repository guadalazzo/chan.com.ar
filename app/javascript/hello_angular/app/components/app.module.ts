import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Carousel} from './carousel.component';
import {PostComponent}from './post.component' ;
import  PostsService  from '../services/posts.service';
import RecentComponent from './recent.component';

@NgModule({
  declarations: [
    Carousel,
    AppComponent,
    PostComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CarouselModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
