import { Component } from '@angular/core';
import PostsService from '../services/posts.service';
import Post from '../models/post.model';
import { PostComponent } from './post.component';
import {Carousel} from './carousel.component'
@Component({
  selector: 'app',
  templateUrl: './app.component.html',

})

export class AppComponent {

	posts: Post[];
	total_pages: number;
	total_count: number;
	constructor(private postsService: PostsService){}
	ngOnInit(){
		this.postsService.getPosts().subscribe(response=> {
			this.total_count=response.total_count
			this.total_pages=response.total_pages
			this.posts = response.page
		});
	}
		
	 mouseEnter(event){
  	event.target.classList.add('animated','bounce');
   }

   mouseLeave(event){
   	event.target.classList.remove('animated','bounce');
   }
  name = 'Angular!';
}
