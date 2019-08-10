import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FetchusersService {

private username:string;
  constructor( private http:HttpClient) { }

//fetching all users list
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users?since=xxx/events/public" + this.username);
  }

  //if click or search user fetch the repositories 
  findrepositories(username){
  	  	return this.http.get("https://api.github.com/users/" + username + "/repos");
  }
    //if click or search user fetch the repositories
    clickSearch1(data){
   return this.http.get(data);

    } 

}
