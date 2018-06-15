import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wrkspace-admin',
  templateUrl: './wrkspace-admin.component.html',
  styleUrls: ['./wrkspace-admin.component.scss']
})
export class WrkspaceAdminComponent implements OnInit {
  wrkspaceAdmin : Array<object>; 

  constructor(private Data:DataService) {
    this.wrkspaceAdmin = [];
    this.workspaceAD();
   }

  workspaceAD() {
    let path: string='./assets/wrkspaceAdmin.json';
    this.Data.wrkspaceAdmin(path).subscribe(
       res => {
            this.wrkspaceAdmin = res;
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
