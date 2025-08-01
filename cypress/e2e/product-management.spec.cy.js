import ProductsPage from '../pages/ProductsPage';
import testData from '../fixtures/testData.json';

describe('Product Management', () => {

  it('should search and add a product to cart', () => {
    ProductsPage.goToProductsPage();
    ProductsPage.searchProduct(testData.product.productToSearch);
    ProductsPage.clickViewProduct(0);
    ProductsPage.addToCart(0);
    ProductsPage.continueShopping();
    ProductsPage.goToCart();
    ProductsPage.assertProductInCart(testData.product.productToSearch);
  });
});
