class products
{
    constructor(sku, title, beskrivning, price, no_in_stock)
    {
        this.sku = sku;
        this.title = title;
        this.beskrivning = beskrivning;
        this.price = price;
       
        this.no_in_stock = no_in_stock;

    }
}


class toys extends products
{   
    constructor(sku, title, beskrivning, price, no_in_stock, age_from)
    {
        super(sku, title, beskrivning, price, no_in_stock);
        this.age_from = age_from;
    }

}


class clothes extends products
{
    constructor(sku, title, beskrivning, price, no_in_stock, size)
    {
        super(sku, title, beskrivning, price, no_in_stock);
        this.size = size;
    }

}


class warehouse 
{
    constructor(products = [])
    {
        this.products = products;
    }

    add_product(sku, title, beskrivning, price, no_in_stock)
    {  
        this.products.push(new products(sku, title, beskrivning, price, no_in_stock));
    }

    add_toys(sku, title, beskrivning, price, no_in_stock, age_from)
    {
        this.products.push(new toys(sku, title, beskrivning, price, no_in_stock, age_from));
    }

    add_clothes(sku, title, beskrivning, price, no_in_stock, size)
    {
        this.products.push(new clothes(sku, title, beskrivning, price, no_in_stock, size));
    }

    inventory()
    {
        console.log(this.products);
    }

    findProduct(value)
    {
        return this.products.filter((x) => x.sku == value)[0];
    }
}


class shoppingCart
{
    constructor()
    {
        this.aShoppingCart = [];
    }

    printShoppingCart()
    {
        console.log(this.aShoppingCart);
    }

    addCart(addAProduct)
    {
        
        this.aShoppingCart.push(stock.findProduct(addAProduct));
    }

    removeCart(removeAProduct)
    {
        this.aShoppingCart.splice(this.aShoppingCart.indexOf(this.aShoppingCart.filter((x) => x.sku == removeAProduct)[0]), 1);
    }

    calcSumShoppingCart()
    {
        console.log('Your total cost in SEK is: ' + this.aShoppingCart
        .map((x) => x.price)
        .reduce((total,currVal) => total + currVal));
    }
}


class customer
{
    constructor(name)
    {
        this.name = name;
        this.orderHistory = [];
        this.shoppingCart = new shoppingCart();
    }

    buy()
    {
        this.orderHistory.push(
        {
            date: new Date().toDateString(),
            order: this.shoppingCart.aShoppingCart
        });
        
        for (let i = 0; i < this.shoppingCart.aShoppingCart.length == 1; i++)
        {
            stock.findProduct(this.shoppingCart.aShoppingCart[i].sku).no_in_stock--;
            console.log(stock.findProduct(this.shoppingCart.aShoppingCart[i].sku)); 
        }
        this.shoppingCart.aShoppingCart = [];
        console.log(this.orderHistory); 
    }
}


let stock = new warehouse();
let shop = new shoppingCart();

stock.add_product(489, 'Dator ', 'Lenovo Legion ', 2675, 3);
stock.add_toys(231, 'Bus', 'A yellow schoolbus', 100, 1, 5);
stock.add_clothes(456, 'Jacka', 'A black jacket', 345, 67, 34);

//stock.inventory();
//stock.findProduct(489);
//stock.findProduct(456);

let aCustomer = new customer('Ryza');
aCustomer.shoppingCart.addCart(489);
aCustomer.shoppingCart.addCart(231);
aCustomer.shoppingCart.addCart(456);

aCustomer.shoppingCart.printShoppingCart();
//aCustomer.shoppingCart.removeCart(489);
//aCustomer.shoppingCart.printShoppingCart();

aCustomer.shoppingCart.calcSumShoppingCart();
aCustomer.buy();