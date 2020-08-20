import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';

import { EventService } from '../../services/event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event:Event;

  constructor(private eventService:EventService, private route: Router) { }

  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('event-detail'));
    console.log("eventoDetalle: ", JSON.stringify(this.event));

  }

  deleteEvent() {
    console.log("Delete event");

    this.eventService.deleteEvent(this.event.id).subscribe(response => {
      this.redirect('home');

    }, error => {

    });
  }

  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }
}
