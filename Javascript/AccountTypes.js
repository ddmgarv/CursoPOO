class User extends Account {
  constructor(id, name, document, email, password, travels, stars) {
    super(id, name, document, email, password);
    this.travels = travels;
    this.stars = stars;
  }
}
class Driver extends Account {
  constructor(id, name, document, email, password, stars, license) {
    super(id, name, document, email, password);
    this.stars = stars;
    this.license = license;
  }
}
