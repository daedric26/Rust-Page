import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommentPageComponent } from './comment-page/comment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerdetailsComponent,
    SearchBarComponent,
    CommentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
