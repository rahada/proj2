import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
datajson: Array<object>; 
indexx:Array<number>;
	
constructor(private Data:DataService,
            private transferService:TransferService,
            private router:Router) {
       this.datajson = [];
     this.coursedata();
     this.indexx=this.transferService.getCart() || [];
     console.log(this.indexx);
  }

	coursedata():void {
    let path: string='../../assets/course.json';
    this.Data.courseJson(path).subscribe(
       res => {
            console.log(res);
            this.datajson = res;
            this.transferService.setUrlHistoryObj(this.datajson);
            this.transferService.setSelectedCart(this.indexx);
              },
       err => {
           console.log(err);
              }
    );
           }

           addCart(id:number){
            console.log(id);
            this.indexx.push(id);
            console.log(this.indexx);
          }
	
  ngOnInit() {
    console.log(this.indexx);
  }

}
