import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementListItemComponent } from './announcement-list-item/announcement-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementListComponent,
    AnnouncementListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
