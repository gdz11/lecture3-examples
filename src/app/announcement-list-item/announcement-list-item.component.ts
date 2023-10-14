import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement, AnnouncementStatus } from '../announcement';

@Component({
  selector: 'app-announcement-list-item',
  templateUrl: './announcement-list-item.component.html',
  styleUrls: ['./announcement-list-item.component.css']
})
export class AnnouncementListItemComponent {

  @Input()
  announcement!: Announcement;

  @Input()
  isSelected!: boolean;

  @Output() onStatusChange: EventEmitter<AnnouncementStatus> = new EventEmitter<AnnouncementStatus>();


  onActivate(event: Event){
    event.stopPropagation();
    this.onStatusChange.emit(AnnouncementStatus.Active);
  }

  onDeactivate(event: Event){
    event.stopPropagation();
    this.onStatusChange.emit(AnnouncementStatus.Deactivated);
  }

  isActive(){
    return this.announcement.status == AnnouncementStatus.Active;
  }

  getClass(){
    return {
      'tile--active': this.announcement.status == AnnouncementStatus.Active,
      'tile--deactivated': this.announcement.status == AnnouncementStatus.Deactivated,
      'tile--selected': this.isSelected
    } 
  }

}

