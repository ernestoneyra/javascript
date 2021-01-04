class product{
    constructor(title, no_in_stock)
    {
        this.title = title;
        this.no_in_stock = no_in_stock;
    }
    print()
    {
        console.log("printing product");
        console.log(this.title, this.no_in_stock);
       
    }

  
    
}


class Stock 
{
    constructor()
    {
        
        this.products = [];
    }

    

    add_product(product)
    {
        //let stock_product = new stock_product(product, no_in_stock);
        this.products.push(product);
    }
    
    inventory()
    {
        console.log("all products");
        //console.log(this.product);
        //let local_product = this.products.map(product => 'Product: ' + product.title + ', No in stock ' + products.no_in_stock);
        //console.log(local_products);
        for ( let product of this.products)
        {
            console.log('Product: 2 ' + product.title);
            console.log(product.no_in_stock + ' of them in stock');
            //product.print();
        }
    }
    
}

let stock = new Stock();

let jacket = new product("jacket", 4);
let sweater = new product("sweater", 2);
let pants = new product("pants", 6);

stock.add_product(jacket);
stock.add_product(pants);
stock.add_product(sweater);


stock.inventory();
//console.log(stock);


