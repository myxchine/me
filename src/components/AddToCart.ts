import { Product } from "@/server/interface";

const updateUserCart = (newProduct: Product): Product[] => {
  // Get the current cart from local storage and parse it as an array
  const currentCart: Product[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  // Check if the new product already exists in the cart
  const existingProductIndex = currentCart.findIndex(
    (product) => product.id === newProduct.id
  );

  if (existingProductIndex !== -1) {
    // If the product already exists, update its quantity
    const updatedCart = [...currentCart];
    updatedCart[existingProductIndex].quantity += 1; // Increment the quantity

    // Store the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Return the updated cart
    return updatedCart;
  } else {
    // If the product doesn't exist, add it to the cart with quantity 1
    const newProductWithQuantity: Product = {
      ...newProduct,
      quantity: 1, // Add quantity field with value 1
    };

    const newCart: Product[] = [...currentCart, newProductWithQuantity];

    // Store the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Return the updated cart
    return newCart;
  }
};

export default updateUserCart;
