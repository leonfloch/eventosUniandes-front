import { Component, OnInit } from '@angular/core';

import {EventService} from '../../services/event/event.service';
import {Event} from '../../model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events = new Array<Event>();

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.getEventsUser();
  }


  getEventsUser() {
    this.eventService.getEventsUser().subscribe((response:Event[]) => {
      console.log(JSON.stringify(response));
      this.events = response;

    }, error => {

    });
  }

}
