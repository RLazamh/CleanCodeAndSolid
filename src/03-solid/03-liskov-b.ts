export abstract class Vehicle {

    abstract getNumberSeats() : number;

}

export class Tesla extends Vehicle {
    
    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{

    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{

    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{

    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle{

    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}

export class Ferrari extends Vehicle{

    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberSeats(): number {
        return this.numberOfSeats;
    }
}
