import { Tesla, Audi, Toyota, Honda , Volvo, Vehicle } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle [] ) => {
    // const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda | Volvo)[] ) => {

    cars.forEach(car => {
        console.log( car.constructor.name , car.getNumberSeats())
    })
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberSeats() )
        //         continue;
        //     }
            
        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberSeats() )
        //         continue;
        //     }

        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(5)
    ];


    printCarSeats( cars );

})();