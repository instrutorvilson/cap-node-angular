class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}

let car1 = new Car("Kombi")
console.log(car1.present())

let car2 = new Car()
console.log(car2)

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.carname + ', it is a ' + this.model;
    }
}
let model1 = new Model('kombi', "Serie luxo")
console.log(model1.show())