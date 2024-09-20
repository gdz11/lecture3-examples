import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement, AnnouncementStatus } from '../announcement';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-announcement-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './announcement-list-item.component.html',
  styleUrl: './announcement-list-item.component.css'
})
export class AnnouncementListItemComponent {
  //we use input to retrieve data from parent component
  //list-item component is dumb component, it does not retriev data itself from sevrer or other sources, it receives all data via inputs
  @Input() announcement!: Announcement;

  //if this announcement is currently selected / hilighted
  @Input() isSelected!: boolean;

  //we use output to notify parent component about of click on activate/deactivate button.
  //actual status update (updating data) is performed by parent component
  //child component only sends an event with new desired status
  //we use generic class EventEmitter<T> where T is the type of our event payload (the data we would like to send to parent)
  //in this case T is AnnouncementStatus, because we send only the new desired status to parent component
  @Output() onStatusChange: EventEmitter<AnnouncementStatus> = new EventEmitter<AnnouncementStatus>();


  //this method is called when user clicks activate button
  onActivate(event: Event){
    event.stopPropagation();//we stop event propagation to avoid also selecting announcement when clicking buttons
    //we call emit method on eventEmiiter(output) to actually send event to parent component
    //A parameter we pass to emit method, will be available as an event payload in parent component template in special $event variable
    //bevasue this is activation we pass AnnouncementStatus.Active as an event payload
    this.onStatusChange.emit(AnnouncementStatus.Active);
  }

  //this method is called when user clicks deactivate button
  onDeactivate(event: Event){
    event.stopPropagation();
    this.onStatusChange.emit(AnnouncementStatus.Deactivated);
  }

  //this function is used in template in ngIf expression (to display appropriate button either activate or deactivate)
  //return value is boolean, true when announcement is active and false otherwise
  isActive(){
    return this.announcement.status == AnnouncementStatus.Active;
  }

  //this function is used in template in ngClass expression
  //we return onbject, where keys are css class names we would like to apply based on some conditions
  //values are conditions when to apply this particular class
  //when condition evaluates to true css class is applied, when the result is false class is removed from html element
  //this allows to apply css classes dynamically based on current application state (the current data)
  //when application state changes as a result of user actions (e. g. clicking button), css classes change according to new data (state)
  getClass(){
    return {
      //css classes to change border color of announcement tile based on it's current status
      'tile--active': this.announcement.status == AnnouncementStatus.Active,
      'tile--deactivated': this.announcement.status == AnnouncementStatus.Deactivated,
      //css class to hilight announcement when it's selected
      'tile--selected': this.isSelected
    } 
  }

}
