import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.css']
})
export class SidnavListComponent implements OnInit {

  @Output()
  public sideNavClose = new EventEmitter();
  constructor() { }

  onSidenavClose(){
    this.sideNavClose.emit();

  }
  ngOnInit(): void {
  }

}
