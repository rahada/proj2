import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit {
  crsjson: Array<object>; 

  constructor(private DataService:DataService) {
    this.crsjson = [];
    this.courseAD();
   }

   courseAD():void{
    let path: string='./assets/coursesAdmin.json';
    this.DataService.crsAdmin(path).subscribe(
       res => {
            this.crsjson = res;
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
