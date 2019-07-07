export default class Member
{
  constructor(base, cart)
  {
    this.base = base;

    this.avatarUrl = this.base.querySelector('.member__avatar img').getAttribute('src');
    this.fullName = this.base.querySelector('.member__name').textContent;

    this.base.addEventListener('click', this.addToCart.bind(this));
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
