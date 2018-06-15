import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-instructor',
  templateUrl: './admin-instructor.component.html',
  styleUrls: ['./admin-instructor.component.scss']
})
export class AdminInstructorComponent implements OnInit {
  instructorAdmin: Array<object>; 

  constructor(private Data:DataService) {
    this.instructorAdmin = [];
    this.instructAD();
   }

   instructAD():void{
    let path: string='./assets/instructorAdmin.json';
    this.Data.instAdmin(path).subscribe(
       res => {
            this.instructorAdmin = res;
           console.log(res);
           

              },
       err => {
           console.log(err);
              }
    );
           }

  ngOnInit() {
  }

}
