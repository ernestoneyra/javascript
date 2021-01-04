
/* • Produkter ska ha egenskaper som sku (artikelnr), titel, beskrivning, antal i lager, pris. Den ska ha en metod som skriver ut produkten.*/
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

// Leksaker ska ha en klass som ärver från produkter och lägger till egenskapen ”ålder från”.
class toys extends products
{   
    constructor(sku, title, beskrivning, price, no_in_stock, age_from)
    {
        super(sku, title, beskrivning, price, no_in_stock);
        this.age_from = age_from;
    }

}

// Kläder ska ha en klass som ärver från produkter och lägger till egenskapen size.
class clothes extends products
{
    constructor(sku, title, beskrivning, price, no_in_stock, size)
    {
        super(sku, title, beskrivning, price, no_in_stock);
        this.size = size;
    }

}


/* Det ska finnas en lager-klass som håller reda på alla produkter i butiken och hur många som finns
i lager av varje produkt.*/

/*Det ska finnas en metod som returnerar ett objekt baserat på sku. Om det t ex finns en
produkt ”jacka” med sku ”456” så ska man kunna söka efter produkten genom att skicka
artikelnumret till metoden och få tillbaka objektet.*/
class warehouse //extends products
{
    constructor(products = [])
    {
        this.products = products;
    }
    /*varje produuct måste pushas upp till arrayen ovan. product kommer senare.*/
    /*add_product(product)
    {
        this.products.push(product);
    }*/

    add_product(sku, title, beskrivning, price, no_in_stock)
    {   //pushar till this.student, men inom parantesen måste det stå vad jag ska pusha, i detta fall classen products.
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

    /*Det ska finnas en inventarie-metod som skriver ut en lista med alla produkter och hur många
    det finns av produkten.*/
    inventory()
    {
        
        console.log(this.products);
        /*console.log('Varor ');
        for (let product of this.products)
        {
            //console.log('SKU: ' + product.sku + ' artikel: ' + product.title + ' beskrivning: ' + product.beskrivning + ' pris: ' + product.price + '', product.no_in_stock + ' of them in stock.');
            //console.log(product.no_in_stock + ' of them in stock');
        }*/
    }

    findProduct(value)
    {
        return this.products.filter((x) => x.sku == value)[0];
    }

    /*indProduct(sku)
    {
        this.products.push(sku);
        let found = this.products.find(product => (product.sku) === sku);
        console.log(found)

        
    }*/
    
    
    
    
}

/*Det ska finnas en varukorg som innehåller 0-n produkter. Varukorgen ska höra ihop med en kund.*/
/*• Varukorgen ska ha en metod för att skriva ut innehållet i korgen.
• Varukorgen ska ha en metod för att räkna ihop summan av värdet av alla produkter i korgen.
• Varukorgen ska ha metoder för att lägga till och ta bort produkter i varukorgen.*/
class shoppingCart
{
    /*constructor()
    {
        this.products = [];
    }
    shopProducts(... article)
    {
            
        console.log(article);  
    }  */
    /*add()
    {
        const addition = this.products.reduce((accumulated, article) => (accumulated + this.products.price), 0);

        console.log(addition);
    }*/
    
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

        /*console.log(
        ` Total cost: ${this.shoppingCartArray
          .map((x) => x.price)
          .reduce((total, currVal) => total + currVal)}`
      );*/
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
            console.log(stock.findProduct(this.shoppingCart.aShoppingCart[i].sku)); // tar bort/visar produkterna igen. 
        }

        this.shoppingCart.aShoppingCart = [];
        console.log(this.orderHistory); //datum och vad man har beställt.

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

/*let computer = new products(489, "dator", 'lenovo legion ', '2447 kr', 4);
let sweater = new clothes(235, "sweater", 'skön grön tröja', '345 kr', 2, 34);
let bus = new toys(123, "bus", 'gul skolbuss', '255 kr', 6, 5);

stock.add_product(computer);
stock.add_clothes(sweater);
stock.add_toys(bus);
stock.findProduct(456);
stock.findProduct(235);

//shop.shopProducts(computer,sweater ,bus);
//shop.add();

stock.inventory();*/

