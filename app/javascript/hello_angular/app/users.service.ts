import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import User from './user.model';

@Injectable()
export default class UsersService {

constructor(private http: Http){}
	getUsers(){
		return this.http.get('/api/users').map(response=> response.json())
	}

}