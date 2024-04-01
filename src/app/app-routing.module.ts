import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [{ path: 'playerdetails', component: PlayerdetailsComponent }, { path: 'commentpage', component: CommentPageComponent }, { path: 'adminpanel', component: AdminPanelComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
