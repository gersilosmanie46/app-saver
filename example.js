/*
Filename: ComplexJavascriptCode

This complex JavaScript code demonstrates a simulation of a shopping cart functionality for an e-commerce website. It includes features like adding items, removing items, updating quantities, calculating totals, applying discounts, and handling various edge cases.

Please note that this code is simplified and doesn't cover error handling or data persistence. It is intended for demonstration purposes only and should not be used in a production environment.

*/

// Constants
const TAX_RATE = 0.08;
const DISCOUNT_CODE = "SUMMER";

// Sample inventory data
const inventory = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Shoes", price: 80 },
  // ... More items
];

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(itemId, quantity) {
    const item = inventory.find((item) => item.id === itemId);
    if (!item) {
      console.log("Item not found in the inventory.");
      return;
    }

    const existingItem = this.items.find((item) => item.id === itemId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...item, quantity });
    }

    console.log(`Added ${quantity} ${item.name}(s) to the cart.`);
  }

  removeItem(itemId, quantity) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      console.log("Item not found in the cart.");
      return;
    }

    const item = this.items[itemIndex];
    if (quantity >= item.quantity) {
      this.items.splice(itemIndex, 1);
    } else {
      item.quantity -= quantity;
    }

    console.log(`Removed ${quantity} ${item.name}(s) from the cart.`);
  }

  updateQuantity(itemId, quantity) {
    const item = this.items.find((item) => item.id === itemId);
    if (!item) {
      console.log("Item not found in the cart.");
      return;
    }

    if (quantity <= 0) {
      console.log("Invalid quantity.");
      return;
    }

    item.quantity = quantity;

    console.log(`Updated quantity of ${item.name} to ${quantity}.`);
  }

  calculateSubtotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  calculateTax() {
    return this.calculateSubtotal() * TAX_RATE;
  }

  calculateDiscount(discountCode) {
    if (discountCode === DISCOUNT_CODE) {
      return this.calculateSubtotal() * 0.1; // 10% discount
    }
    return 0;
  }

  calculateTotal() {
    return (
      this.calculateSubtotal() +
      this.calculateTax() -
      this.calculateDiscount(this.discountCode)
    );
  }

  checkout() {
    console.log("-".repeat(30));
    console.log("Cart Summary:");
    console.log("-".repeat(30));

    this.items.forEach((item) => {
      console.log(`${item.name} (x${item.quantity}): $${item.price * item.quantity}`);
    });

    console.log("-".repeat(30));
    console.log(
      `Subtotal: $${this.calculateSubtotal().toFixed(2)}`);
    console.log(`Tax: $${this.calculateTax().toFixed(2)}`);
    console.log(`Discount: $${this.calculateDiscount(this.discountCode).toFixed(2)}`);
    console.log("-".repeat(30));
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(1, 2); // Adding 2 T-Shirts
cart.addItem(2, 1); // Adding 1 Jeans
cart.addItem(3, 1); // Adding 1 Shoes

cart.removeItem(1, 1); // Removing 1 T-Shirt
cart.updateQuantity(2, 2); // Updating Jeans quantity to 2

cart.checkout();

// Output:
// ------------------------------
// Cart Summary:
// ------------------------------
// T-Shirt (x1): $20.00
// Jeans (x2): $100.00
// Shoes (x1): $80.00
// ------------------------------
// Subtotal: $200.00
// Tax: $16.00
// Discount: $0.00
// ------------------------------
// Total: $216.00

// ... More functionality can be added as needed.