export default class Member
{
  /**
   * Constructor.
   * Create a new member.
   * Setup the main click handler.
   *
   * @param {HTMLElement} base Reference to the original element.
   * @param {Cart} cart Reference to the cart.
   */
  constructor(base, cart)
  {
    this.base = base;

    this.avatarUrl = this.base.querySelector('.member__avatar img').getAttribute('src');
    this.fullName = this.base.querySelector('.member__name').textContent;
    this.title = this.base.querySelector('.member__title').textContent;

    this.base.addEventListener('click', this.handleClick.bind(this));
    this.base.addEventListener('keypress', this.handleClick.bind(this));
    this.cart = cart;
  }

  /**
   * Handle clicks inside the member element.
   *
   * @param {MouseEvent} event
   */
  handleClick(event)
  {
    // Check if it's a KeyboardEvent
    if (event instanceof KeyboardEvent) {
      // Only allow Enter to continue the callback
      if (event.keyCode !== 13) {
        return;
      }
    } else {
      this.base.blur();
    }

    // Cancel the callback when clicking on the portfolio link
    if (event.target.classList.contains('member__anchor')
        || this.base.classList.contains('is-animating')) {
      return;
    }

    // Remove the member if it's already in the cart
    if (this.cart.contains(this)) {
      this.base.classList.remove('is-selected');
      this.cart.remove(this);
      return;
    }

    // Add the member to the cart
    this.cart.add(this);
    this.base.classList.add('is-selected');
  }
}
