import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import routes from '../fixtures/routes.json'

describe('Cart Management', () => {
  it('Add and Remove Product', () => {
    ProductsPage.goToProductsPage();
    ProductsPage.addToCart(0);
    ProductsPage.continueShopping();
    CartPage.visitCart();
    CartPage.assertProductVisible('Blue Top');
    CartPage.removeFirstProduct();
    CartPage.assertCartIsEmpty();
  });
});
