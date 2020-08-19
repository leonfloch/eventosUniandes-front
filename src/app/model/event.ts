export class Event {
  id:string;
  event_name:string;
  event_category:string;
  event_place:string;
  event_address:string;
  event_initial_date:string;
  event_final_date:string;
  event_type:string;
  user_id:string;

  public constructor(init?: Partial<Event>) {
    Object.assign(this, init);
}

}
