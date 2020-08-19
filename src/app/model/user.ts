export class User {

  username:string;
  first_name:string;
  last_name:string;
  email:string;
  password:string;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
}

}
