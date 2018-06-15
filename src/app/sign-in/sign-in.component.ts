import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
getData: Array<object>;
	
  constructor(private Data: DataService,
			  private http:HttpClient) 
	{
  this.getData=[{}];
  }

	
  getworkspace(): void{
    let path:string='./assets/login.Json'
    this.Data.getData(path).subscribe(
      res=>{
        this.getData =res;
        console.log(res);
      },
      err=>{
        console.log(err);
      },
      );
  }
	
  ngOnInit() {
  }

}
