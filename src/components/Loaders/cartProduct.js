import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const saveCart = [];
    const storedCart = getShoppingCart();
    for ( const id in storedCart){
        const addedProduct = products.find( pd => pd.id === id)
        if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }

    return saveCart;
}
export default cartProductsLoader;