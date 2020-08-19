import { Injectable } from '@angular/core';

import { RequestService } from '../request/request.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private requestService: RequestService) { }


  getEventsUser() {

    return this.requestService.get('/events/');

  }

}
