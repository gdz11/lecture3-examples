import { Component } from '@angular/core';
import { Announcement, AnnouncementStatus } from '../announcement';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent {

  //list of vip announcements, this variable is used in template for displaying announcement list
  vipAnnouncements: Announcement[];
  //list of regular annuncements, this variable is used in template for displaying announcement list
  regularAnnouncements: Announcement[];

  //this variable stores currently selected announcement
  //it's used to hilight currently selected announcement in view (by comparing each announcement from the list to this variable)
  selectedAnnouncement?: Announcement;

  //event handler bound to child component (list-item) event(output) that is fired when announcement is either activated or deactivated
  onChange(announcement: Announcement, newStatus: AnnouncementStatus) {
    ///we update announcement that was changed(activated or deactivated) with new status received from child component via $event value
     //if we refresh web page announcement statuses are reverted to their initial values, this is because we do not actually persist changes
      //in real world application we would actually update announcement status by making api call using ajax
      //in that case changes are persisted in database and persist after page refresh
    announcement.status = newStatus;
  }

  //event handler bound to click event of child component element, this is using angulars builtin event using the same synatx
  //as user defined events (outputs)
  onSelect(announcement: Announcement) {
    //we update variable storing currently selected announcement to reference the announcement user just clicked
    this.selectedAnnouncement = announcement;
  }

  //event handler bound to click event of delete button
  onDelete(announcement?: Announcement) {
    //we delete announcement from the list if it's selected, and do nothing if user has not selected any announcement
    if (this.selectedAnnouncement !== undefined) {
      //we chek both lists to find announcement that needs to be deleted. Objects are compared by reference, alternatively we can use
      //id property to find required announcement
      //once these variables are updated, changes are immediately reflected in view(visible to user)
      //if we refresh web page deleted announcements are back, this is because we do not actually persist changes
      //in real world application we would actually delete announcement by makin api call using ajax
      //in that case chages are persisted in database and deleted announcements are never displayed again
      this.vipAnnouncements = this.vipAnnouncements.filter(c => c != announcement);//we use filter method to create new array without deleted announcement (by filtering it out)
      this.regularAnnouncements = this.regularAnnouncements.filter(c => c != announcement);//we use filter method to create new array without deleted announcement (by filtering it out)

      this.selectedAnnouncement = undefined;//once announcement is deleted it's not more currently selected announcement, so we clear variable
    }
  }

  constructor() {
    //we initialize both lists with some dummy data
    //in real worlfd application we retrieve this date from server via ajax request
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
