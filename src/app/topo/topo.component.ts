import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public userName = '';

  constructor() { }

  ngOnInit() {
  }

  onUserNameChange(userNamePassed: string) {
    console.log(userNamePassed);
    this.userName = userNamePassed;
  }

}
