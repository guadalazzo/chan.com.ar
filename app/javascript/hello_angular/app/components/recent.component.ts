import { Component } from '@angular/core';
import PostsService from '../services/posts.service';
import Post from '../models/post.model';
import WOW from 'wow.js';

@Component({
  selector: 'recent-articles',
  templateUrl: './recent.component.html'

})

export default class RecentComponent {
	ngOnInit(){
		new WOW().init();
	}
};