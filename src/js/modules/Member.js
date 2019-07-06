export default class Member
{
  constructor(element, cart)
  {
    this.element = element;
    this.element.addEventListener('click', this.addToCart.bind(this));
    this.cart = cart;
  }

  addToCart(event)
  {
    if (event.target.classList.contains('member__anchor')) {
      return;
    }

    if (this.cart.contains(this)) {
      this.cart.remove(this);
      return;
    }

    this.cart.add(this);
  }
}
