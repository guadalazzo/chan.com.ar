import { Component } from '@angular/core';
import UserService from './users.service';
import User from './user.model';
@Component({
  selector: 'hello-angular',
  templateUrl: './app.component.html',

})

export class AppComponent {
	users: User[];
	total_pages: number;
	total_count: number;
	constructor(private userService: UserService){}
	ngOnInit(){
		this.userService.getUsers().subscribe(response=> {
			this.total_count=response.total_count
			this.total_pages=response.total_pages
			this.users = response.page
		});
	}
  name = 'Angular!';
}
