import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrkspc-profile',
  templateUrl: './wrkspc-profile.component.html',
  styleUrls: ['./wrkspc-profile.component.scss']
})
export class WrkspcProfileComponent implements OnInit {
  currentRate = 8;
  constructor() { }

  ngOnInit() {
  }

}
