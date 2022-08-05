interface Bird {
    eat() : void;
}

interface FlyBird {
    fly() : void;
}

interface RunningBird {
    run() : void;
}

interface SwimmerBird{
    swim() : void;
} 

class Tucan implements Bird  , FlyBird {
    public fly() : void {}
    public eat() : void {}
}

class Hummbird implements Bird , FlyBird {
    public fly() : void {}
    public eat() : void {}
    public swim(): void {}
}

class Ostrich implements Bird , RunningBird {

    public eat() : void {}
    public run() : void {}
}

class Pinguin implements Bird , SwimmerBird {

    public eat() : void {}
    public swim() : void {}
    
}