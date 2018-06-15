import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
getAdmin:Array<object>;
  constructor(private Data: DataService,
			  private http:HttpClient) {
	  this.getAdmin=[{}];
  
  }
	
	  getContact(): void{
    let path:string='https://postingtest-7e2f6.firebaseio.com/data.json'
    this.Data.getAdmin(path).subscribe(
      res=>{
        this.getAdmin =res;
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
