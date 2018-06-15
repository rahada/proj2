import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
currentRate = 6;
instjson:Array<object>;
	
  constructor(private Data:DataService) {
	  this.instjson=[];
  this.instructordata()
  }

  ngOnInit() {
  }
	
	instructordata() {
    let path: string='./assets/instructor.json';
    this.Data.instructorJson(path).subscribe(
       res => {
            this.instjson = res;
           console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }

}
