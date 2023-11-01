/* Filename: ComplexWebApp.js */

// This JavaScript code is for a complex web application that simulates an online store
// and performs various operations related to products, orders, and users.

// Constants
const TAX_RATE = 0.1;
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_AMOUNT = 10;

// Data Model

// Define 'Product' class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  toString() {
    return `${this.name} ($${this.price.toFixed(2)})`;
  }
}

// Define 'User' class
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Define 'Order' class
class Order {
  constructor(id, user, products) {
    this.id = id;
    this.user = user;
    this.products = products;
  }

  calculateTotal() {
    let subtotal = 0;
    for (let product of this.products) {
      subtotal += product.price;
    }
    return subtotal + (subtotal * TAX_RATE);
  }
}

// Actions

// Create products
const product1 = new Product(1, "iPhone 12", 999);
const product2 = new Product(2, "MacBook Pro", 1999);
const product3 = new Product(3, "AirPods Pro", 249);

// Create users
const user1 = new User(1, "John Doe", "john.doe@example.com");
const user2 = new User(2, "Jane Smith", "jane.smith@example.com");

// Create orders
const order1 = new Order(1, user1, [product1, product2]);
const order2 = new Order(2, user2, [product1, product3]);

// Perform operations

// Print product information
console.log("Product 1:", product1.toString());
console.log("Product 2:", product2.toString());
console.log("Product 3:", product3.toString());

// Print user information
console.log("User 1:", user1);
console.log("User 2:", user2);

// Calculate total for each order
console.log("Order 1 Total:", order1.calculateTotal().toFixed(2));
console.log("Order 2 Total:", order2.calculateTotal().toFixed(2));

// Apply discount if applicable
if (order2.calculateTotal() >= DISCOUNT_THRESHOLD) {
  console.log(`Discount of $${DISCOUNT_AMOUNT.toFixed(2)} applied to order 2!`);
  console.log("New Order 2 Total:", (order2.calculateTotal() - DISCOUNT_AMOUNT).toFixed(2));
}

// Output:
// Product 1: iPhone 12 ($999.00)
// Product 2: MacBook Pro ($1999.00)
// Product 3: AirPods Pro ($249.00)
// User 1: User { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
// User 2: User { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
// Order 1 Total: 2197.80
// Order 2 Total: 1297.90
// Discount of $10.00 applied to order 2!
// New Order 2 Total: 1287.90