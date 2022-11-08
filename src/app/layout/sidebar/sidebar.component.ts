import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') class =  'center-vertically';

  constructor() { }

  ngOnInit(): void {
  }

}
