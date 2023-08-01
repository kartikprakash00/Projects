// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";
// Data Exchange B/w View and Model.
async function loadPizzas() {
    const pizza = await productOperations.loadProducts();
    console.log('Pizzas are ', pizza);
}
loadPizzas();