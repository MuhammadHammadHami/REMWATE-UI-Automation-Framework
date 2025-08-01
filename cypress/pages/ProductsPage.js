// cypress/pages/ProductsPage.js
import BasePage from './BasePage';
import routes from '../fixtures/routes.json'
import testData from '../fixtures/testData.json'

class ProductsPage extends BasePage {
  constructor(){
    super()
    this.getCartLocator = () => cy.get('a[href="/view_cart"]')
    this.getSearchField = () => cy.get('input[id="search_product"]')
    this.getSubmitSearch = () => cy.get('button[id="submit_search"]')
    this.getAddToCart = () => cy.get('a[class="btn btn-default add-to-cart"]')
    this.getSuccessMsg = () => cy.get('button[class="btn btn-success close-modal btn-block"]')
    this.getItemDescription = () => cy.get('td[class="cart_description"]')
    
  }

  goToProductsPage() {
    this.visit(routes.product);
  }

  searchProduct(productName) {
    this.getSearchField().type(productName);
    this.getSubmitSearch().click();
  }

  clickViewProduct(index = 0) {
    this.getAddToCart().eq(index).click({ force: true });
  }

  addToCart(index = 0) {
    this.getAddToCart().eq(index).click({ force: true });
  }

  continueShopping() {
    this.getSuccessMsg().contains(testData.product.succesMessage).click();
  }

  goToCart() {
    this.getCartLocator().eq(1).click()
  }

  assertProductInCart(productName) {
    this.getItemDescription().should('contain.text', productName);
  }
}

export default new ProductsPage();
