var car = new Car("AW456", new Account("Andres Herrera", "QWE234"));
car.passengers = 4;

car.printDriverData();

var uberX = new Car(
  "A987D",
  new Account("Hugo Ferrer", "Q87M3"),
  "Nissan",
  "Sentra"
);

uberX.passengers = 3;

uberX.printDriverData();
