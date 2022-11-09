import { Component, HostBinding, OnInit } from '@angular/core';

interface SidebarNavs{
  index: number;
  name: string;
  srcIcon: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') class =  'center-vertically';

  indexSelected: number = 0;
  sidebarNavs: SidebarNavs[];
  constructor() {
    this.sidebarNavs = [
      {index : 0, srcIcon : 'assets/icons/dashboard.png', name: 'Dashboard'},
      {index : 1, srcIcon : 'assets/icons/boards.png', name: 'Boards'},
      {index : 2, srcIcon : 'assets/icons/goals.png', name: 'Goals'}
    ]
   }

  ngOnInit(): void {
  }

  onClick(index: number){
    this.indexSelected = index;
  }

}
