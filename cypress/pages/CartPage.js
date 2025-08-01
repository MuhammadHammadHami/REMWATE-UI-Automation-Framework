import BasePage from './BasePage';
import routes from '../fixtures/routes.json'

class CartPage extends BasePage {
  constructor(){
    super()
    this.getDeleteIttemBtn = () => cy.get('a[class="cart_quantity_delete"]')
    this.getCartItemDdescription = () => cy.get('td[class="cart_description"]')

  }
  visitCart() {
    this.visit(routes.cart);
  }

  removeFirstProduct() {
    this.getDeleteIttemBtn().click();
  }

  assertProductVisible(productName) {
    this.getCartItemDdescription().should('contain', productName);
  }

  assertCartIsEmpty() {
    this.getCartItemDdescription().should('not.exist');
  }
}

export default new CartPage();
