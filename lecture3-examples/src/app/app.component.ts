import { Component } from '@angular/core';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnnouncementListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lecture3-examples';
}
