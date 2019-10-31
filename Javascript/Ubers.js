class UberX extends Car {
  constructor(license, driver, brand, model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }
}
class UberPool extends Car {
  constructor(license, driver, brand, model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }
}
class UberBlack extends Car {
  constructor(license, driver, typeCarAccepted, seatsMaterial) {
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
  }
}
class UberVan extends Car {
  constructor(license, driver, typeCarAccepted, seatsMaterial) {
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
  }
}
