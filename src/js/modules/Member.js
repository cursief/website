export default class Member
{
  constructor(element, cart)
  {
    this.element = element;
    this.element.addEventListener('click', this.addToCart.bind(this));
    this.cart = cart;
  }

  addToCart()
  {
    if (this.cart.contains(this)) {
      this.cart.remove(this);
      return;
    }

    this.cart.add(this);
  }
}
