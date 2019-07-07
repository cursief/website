import Member from "./Member";

export default class Members
{
  /**
   * Constructor.
   * Wrapper class for members.
   *
   * @param {Cart} cart Reference to the cart.
   */
  constructor(cart)
  {
    this.members = document.querySelectorAll('.members .member');
    this.cart = cart;
    this.memberObjects = this.members.forEach(memberElement => {
      new Member(memberElement, this.cart);
    });
  }
}
