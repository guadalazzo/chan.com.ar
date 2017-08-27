import { Component } from '@angular/core';
import PostsService from '../services/posts.service';
import Post from '../models/post.model';
import WOW from 'wow.js';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'

})

export default class Footer {
	ngOnInit(){
		new WOW().init();
	}
};