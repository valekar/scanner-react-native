export class User {
  private id: Number;
  private email: String;
  private name: String;
  constructor(id: Number, name: String, email: String) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String) {
    this.name = name;
  }

  public getEmail(): String {
    return this.email;
  }

  public getId(): Number {
    return this.id;
  }
}
