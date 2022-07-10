type Size = '' | 'M' |  'S' | 'XL'
class Product {

    constructor(
        public name : string = '',
        public price : number = 0,
        public size : Size = '',
    ){}

    public isValid() : boolean {
        for (const key in this) {
            switch (typeof this[key]) {

                case 'string':
                    if ( (<string><unknown>this[key]).length <=0 ) {
                        throw new Error(`Field ${key} is empty `);
                    }
                    break;
                
                case 'number':
                    if ( (<number><unknown>this[key]) <=0 ) {
                        throw new Error(`Field ${key} is zero `);
                    }
                    break;
            
                default:
                    throw new Error(`Field ${typeof this[key]} is not supported `);
            }
        }
        return true;
    }
    
    public toString(){
        if(!this.isValid()) return;
        
        return `${this.name} (${this.price}), ${this.size}`;
    }

}

(()=>{
    const bluePants = new Product('Blue large pant', 200, 'M')
    console.log(bluePants.toString());
})();