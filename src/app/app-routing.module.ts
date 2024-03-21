import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { CommentPageComponent } from './comment-page/comment-page.component';

const routes: Routes = [{ path: 'playerdetails', component: PlayerdetailsComponent }, { path: 'commentpage', component: CommentPageComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
