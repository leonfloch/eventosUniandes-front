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
    return this.requestService.post('/events/', event);

  }

}
