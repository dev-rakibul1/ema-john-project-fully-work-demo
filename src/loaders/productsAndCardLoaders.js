import { getStoredCard } from "../utilities/fakedb";

const productsAndCardLoaders = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get card
  const savedCart = getStoredCard();
  const initialCart = [];

  for (let id in savedCart) {
    // console.log(id);

    const addedProduct = products.find((product) => product.id === id);
    // console.log(addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products: products, initialCart: initialCart };
};

export default productsAndCardLoaders;
