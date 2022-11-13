import { Component, HostBinding, OnInit } from '@angular/core';

interface SidebarNavs{
  index: number;
  name: string;
  srcIcon: string;
  route: string;
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
      {index : 0, srcIcon : 'assets/icons/dashboard.png', name: 'Dashboard', route: 'dashboard'},
      {index : 1, srcIcon : 'assets/icons/boards.png', name: 'Boards', route: 'boards'},
      {index : 2, srcIcon : 'assets/icons/goals.png', name: 'Goals', route: 'goals'}
    ]
   }

  ngOnInit(): void {
  }

  onClick(index: number){
    this.indexSelected = index;
  }

}
