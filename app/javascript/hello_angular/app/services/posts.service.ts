import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class PostsService {

constructor(private http: Http){}
	getPosts(){
		return this.http.get('/api/posts').map(response=> response.json())
	}

}