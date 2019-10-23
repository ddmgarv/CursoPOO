from car import car

if __name__ == "__main__":
    print("Hola mundo")

    car = car()
    car.license = "AMS234"
    car.driver = "Andres Herrera"
    print(vars(car))

    car2 = car()
    car2.license = "AAS234"
    car2.driver = "Andrea Herrera"
    print(vars(car2))

    