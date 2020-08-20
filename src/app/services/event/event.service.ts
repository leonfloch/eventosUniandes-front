import { Injectable } from '@angular/core';

import { RequestService } from '../request/request.service';
import { UserService } from '../user/user.service';
import {Event} from '../../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private requestService: RequestService) { }


  getEventsUser() {
    return this.requestService.get('/events/');

  }


  createEvent(event:Event) {
    let initDate = event.event_initial_date + 'T18:00:00Z';
    let endDate = event.event_final_date + 'T18:00:00Z';

    event.event_initial_date = initDate;
    event.event_final_date = endDate;

    return this.requestService.post('/events/', event);

  }

  deleteEvent(idEvent) {
    return this.requestService.delete('/events/' + idEvent);
  }

  updateEvent(event:Event) {
    return this.requestService.put('/events/' + event.id, event);
  }

}
