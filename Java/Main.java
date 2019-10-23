class Main {

    public static void main(String[] args) {
        System.out.println("Hola mundo");

        Car car = new Car("AMQ123", new Account("Andres Herrera", "AND123"));

        car.passengers = 4;
        System.out.println("Car license: " + car.license);

        Car car2 = new Car("QWE156", new Account("Andrea Herrera", "NDA321"));

        car2.passengers = 3;
        System.out.println("Car license: " + car2.license);

    }
}