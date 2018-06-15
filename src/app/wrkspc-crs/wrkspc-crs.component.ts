import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-wrkspc-crs',
  templateUrl: './wrkspc-crs.component.html',
  styleUrls: ['./wrkspc-crs.component.scss']
})
export class WrkspcCrsComponent implements OnInit {
  cartIndex:Array<number>;
  selectedData:Array<object>;
  data:Array<any>;
  itemData:object;
  constructor( private transfer : TransferService ) {
    this.selectedData=[];
    this.cartIndex = this.transfer.getSelectedCart();
    this.data = this.transfer.getUrlHistoryObj();
    this.transfer.setCart(this.cartIndex);
    console.log(this.data);
    console.log(this.cartIndex);
   }

      ngOnInit() {
        console.log(this.data);
        console.log(this.cartIndex);
        
        /** looping on array -cartIndex- contains selected id and and data - Array of objects - to
        check and get the object that matched the id in cartIndex **/

        for(var i=0;i<this.cartIndex.length;i++){
          for(var k=0;k<this.data.length;k++){
          if(this.data[k].id == this.cartIndex[i])
          {
            this.selectedData.push(this.data[k]);
            
          }
        }
        console.log(this.selectedData);
      }
    }
}
