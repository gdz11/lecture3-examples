import { Component } from '@angular/core';
import { Announcement, AnnouncementStatus } from '../announcement';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent {

  vipAnnouncements: Announcement[];
  regularAnnouncements: Announcement[];

  selectedAnnouncement?: Announcement;

  onChange(announcement: Announcement, newStatus: AnnouncementStatus) {
    announcement.status = newStatus;
  }

  onSelect(announcement: Announcement) {
    this.selectedAnnouncement = announcement;
  }

  onDelete(announcement?: Announcement) {
    if (this.selectedAnnouncement !== undefined) {
      this.vipAnnouncements = this.vipAnnouncements.filter(c => c != announcement);
      this.regularAnnouncements = this.regularAnnouncements.filter(c => c != announcement);
    }
  }

  constructor() {
    this.vipAnnouncements = [{
      id: 1,
      title: 'Junior angular developer',
      locations: ['Tbilisi', 'Batumi'],
      isVip: true,
      status: AnnouncementStatus.Active
    },
    {
      id: 2,
      title: 'Middle angular developer',
      locations: ['Tbilisi', 'Rustavi'],
      isVip: true,
      status: AnnouncementStatus.Deactivated
    },
    {
      id: 3,
      title: 'Senior angular developer',
      locations: ['Batumi'],
      isVip: true,
      status: AnnouncementStatus.Active
    }
    ];

    this.regularAnnouncements = [
      {
        id: 4,
        title: 'Junior net developer',
        locations: ['Tbilisi'],
        isVip: false,
        status: AnnouncementStatus.Active
      },
      {
        id: 5,
        title: 'Senior net developer',
        locations: ['Tbilisi'],
        isVip: false,
        status: AnnouncementStatus.Active
      }
    ];
  }
}
