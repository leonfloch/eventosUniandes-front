import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {EventService} from '../../services/event/event.service';
import {Event} from '../../model/event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  event: FormGroup;

  constructor(private fb: FormBuilder, private route: Router,
    private eventService:EventService) { }

  ngOnInit(): void {
    this.event = this.fb.group({
      event_name: new FormControl('', [Validators.required]),
      event_category: new FormControl('', [Validators.required]),
      event_place: new FormControl('', [Validators.required]),
      event_address: new FormControl('', [Validators.required]),
      event_initial_date: new FormControl('', [Validators.required]),
      event_final_date: new FormControl('', [Validators.required]),
      event_type: new FormControl('', [Validators.required])
    });
  }


  /**
   * Crea un nuevo evento
   */
  onSubmit() {
    let newEvent:Event = new Event(this.event.value);
    this.eventService.createEvent(newEvent).subscribe(response => {
        console.log("Evento creado OK: ", JSON.stringify(response));
        this.redirect('home');
      }, error => {

      });

  }



  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }

}
