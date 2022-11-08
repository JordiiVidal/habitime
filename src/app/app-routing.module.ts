import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BoardsListComponent } from './boards/boards-list/boards-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'boards' },
    { path: 'boards', title: 'My Boards', component: BoardsListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }