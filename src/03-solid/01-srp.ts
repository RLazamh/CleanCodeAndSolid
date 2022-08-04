(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        
        get( id:number ){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        save( product : Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {
        private masterEmail : string = 'lazamh@hotmail.com';

        sendEmail( emailList: string[] , template : 'to-clients' | 'to-providers'){
            console.log('Enviando correo a los clientes', template , emailList);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private _productService: ProductService;
        private _mailer: Mailer;
   
        constructor ( _productService : ProductService , _mailer : Mailer ){
            this._productService  = _productService;
            this._mailer          = _mailer; 
            
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this._productService.get( id )
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this._productService.save( product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
    }

    class CartBloc {

        private items : Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const _productService = new ProductService;
    const _mailer = new Mailer;


    const productBloc = new ProductBloc( _productService , _mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);


})(); 