export class User {
  id: Number;
  email: String;
  name: String;
  password: String;
  confirmPassword: String;
  first_name: String;
  last_name: String;
  constructor(
    id: Number,
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    first_name: String,
    last_name: String
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.first_name = first_name;
    this.last_name = last_name;
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

  public getPassward(): String {
    return this.password;
  }

  public getConfirmPassword(): String {
    return this.confirmPassword;
  }
}
