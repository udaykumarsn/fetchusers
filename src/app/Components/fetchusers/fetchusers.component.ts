import { Component, OnInit } from '@angular/core';
import {FetchusersService} from '../../Services/fetchusers.service'
@Component({
  selector: 'app-fetchusers',
  templateUrl: './fetchusers.component.html',
  styleUrls: ['./fetchusers.component.css']
})
export class FetchusersComponent implements OnInit {

  constructor(private service:FetchusersService) { }
userlist=true;
fetchrepos=false;
res1;
userList;
//fetching all users list
  ngOnInit() {
  	this.service.getProfileInfo().subscribe(res=>{
  		this.userList=res;
  	})
  }

//if click or search user fetch the repositories 
  searchRepositories(data){
  	this.userlist=false;
  	 this.fetchrepos=true;
  	  this.service.findrepositories(data).subscribe(res=>{
  	 this.res1=res;
  	})
  }

 //if click User Repos fetch the repositories 
  clickSearch(data){
  	console.log(data)
  	this.service.clickSearch1(data).subscribe(res=>{
  	 this.res1=res;
  	 this.userlist=false;
  	 this.fetchrepos=true;
  	})

  }
}
