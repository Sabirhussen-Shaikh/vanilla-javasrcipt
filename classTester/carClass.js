// 17a 
class Car {
    #brand = undefined;
    #model = undefined;

    constructor(b , m){
        this.brand = b;
        this.model = m
    };

    //17b
    displayInfo(){
        console.log(`${this.brand} and ${this.model} , speed : ${this.speed} km/h , isTrunkOpen : ${this.isTrunkOpen}`);
    };

    //17c
    speed = 0;
    
    go(){
        if (this.isTrunkOpen == false) {
            this.speed = this.speed + 5;
        }

        if (this.speed >= 200) {
            this.speed = 200;
        }
    };

    brake(){
        this.speed = this.speed - 5;
        if (this.speed <= 0) {
            this.speed = 0;
        }
    };

    //17d
    isTrunkOpen = undefined;

    openTrunk(){
        if (this.speed == 0) {
            this.isTrunkOpen = true;
        }
    };

    closeTrunk(){
        this.isTrunkOpen = false;
    }
}

const car1 = new Car('toyota','corolla');
const car2 = new Car('tesla','model 3');


console.log(car1);
console.log(car2);

//17b
console.log('******************************************************');

car1.displayInfo();
car2.displayInfo();

//17c
console.log('******************************************************');

car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.brake();

car1.displayInfo();

car2.go();
car2.go();
car2.go();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();


car2.displayInfo();

//17d
console.log('******************************************************');

car1.openTrunk();
car1.closeTrunk()
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.brake();

car1.displayInfo();

car2.closeTrunk();
car2.go();
car2.go();
car2.go();
car2.brake();


car2.displayInfo();

// 17e
console.log('******************************************************');

class RaceCar extends Car {

    acceleration = undefined;

    constructor(b,m,acc){
        super(b,m);
        this.acceleration = acc;
    }

    displayInfo(){
        console.log(`${this.brand} and ${this.model} , speed : ${this.speed} km/h , acceleration : ${this.acceleration}`);
    };

    go(){
        this.speed = this.speed + this.acceleration;
        if (this.speed >= 300) {
            this.speed = 300;
        }
    }
}

const racecar1 = new RaceCar('McLaren' , 'F1', 20);
racecar1.displayInfo();