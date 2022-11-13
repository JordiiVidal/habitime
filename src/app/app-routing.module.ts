import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardDetailsComponent } from './board/board-details/board-details.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'boards' },
    { path: 'boards', title: 'My Boards', component: BoardListComponent },
    { path: 'boards/:id', title: 'Board', component: BoardDetailsComponent },
    { path: 'dashboard', title: 'Dashboard', component: BoardListComponent },
    { path: 'goals', title: 'Goals', component: BoardListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }