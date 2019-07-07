export default class Cart
{
  /**
   * Constructor.
   * Initialise the cart by querySelecting the base element and its needed
   * child elements.
   * Setup the main click handler.
   */
  constructor()
  {
    this.base = document.querySelector('.cart');

    this.elements = {
      amount: this.base.querySelector('.cart__amount'),
      contentHolder: this.base.querySelector('.cart__content-holder'),
      content: this.base.querySelector('.cart-content')
    };

    this.contents = [];
    this.previousContentLength = -1;

    this.base.addEventListener('click', this.handleClick.bind(this));

    // Trigger an update
    this.update();
  }

  /**
   * Add the member to the cart's contents
   *
   * @param {Member} member Member to be added
   */
  add(member)
  {
    // Check if already added
    if (this.contents.indexOf(member) !== -1) {
      return;
    }

    // Create a new element from the cart-item's template
    const cartItemTemplate = document.querySelector('#cart-item');
    const cartItemFrag = document.importNode(cartItemTemplate.content, true);

    // We will lose the reference of the appended element when appending with the
    // fragment, so we make a copy
    const cartItemElement = cartItemFrag.children[0];

    cartItemElement.elements = {
      image: cartItemElement.querySelector('.cart-item__image'),
      title: cartItemElement.querySelector('.cart-item__title'),
      remove: cartItemElement.querySelector('.cart-item__remove')
    };

    cartItemElement.elements.image.style.backgroundImage = `url('${member.avatarUrl}')`;
    cartItemElement.elements.title.textContent = member.fullName;
    cartItemElement.member = member;

    this.elements.content.appendChild(cartItemElement);

    member.cartItemElement = cartItemElement;

    // Add the item to the contents array
    this.contents.push(member);

    // Trigger an update
    this.update();
  }

  /**
   * Remove the member from the cart's contents
   *
   * @param {Member} member Member to be removed
   */
  remove(member)
  {
    // Check if not in list
    const index = this.contents.indexOf(member);
    if (index === -1) {
      return;
    }

    member.cartItemElement.classList.add('is-removed');

    // Make a reference to the current item, otherwise it might be overwritten
    // by the time we want to remove it
    const cartItemElement = member.cartItemElement;

    window.setTimeout(() => {
      cartItemElement.remove();
    }, 300);

    // Remove the item from the contents array
    this.contents.splice(index, 1);

    // Trigger an update
    this.update();
  }

  /**
   * Helper function for checking if the member has been added
   *
   * @param {Member} member
   */
  contains(member)
  {
    if (this.contents.indexOf(member) !== -1) {
      return true;
    }

    return false;
  }

  /**
   * Update the cart's contents and trigger update for its height
   */
  update()
  {
    this.elements.amount.textContent = this.contents.length;

    if (this.contents.length === 0) {
      const placeholderItemTemplate = document.querySelector('#cart-item-placeholder');
      const placeholderItemFrag = document.importNode(placeholderItemTemplate.content, true);

      const placeholderItem = placeholderItemFrag.children[0];
      this.elements.content.appendChild(placeholderItem);
    } else {
      const placeholderItem = this.base.querySelector('.cart-item--placeholder');
      if (placeholderItem) {
        placeholderItem.remove();
      }
    }

    if (this.contents.length !== this.previousContentLength) {
      this.base.classList.remove('is-updated');
      void this.base.offsetWidth;

      this.base.classList.add('is-updated');
      this.updateSize();
      this.previousContentLength = this.contents.length;
    }
  }

  /**
   * Update the cart's height
   */
  updateSize()
  {
    if (this.base.classList.contains('is-expanded')) {
      let contentHeight = Array.from(this.elements.content.children).reduce((acc, child) => {
        if (child.classList.contains('is-removed')) {
          return acc;
        }
        const childRect = child.getBoundingClientRect();
        return acc + childRect['height'];
      }, 0);

      contentHeight = Math.min(contentHeight, 360);

      const contentStyle = window.getComputedStyle(this.elements.content);
      contentHeight += parseInt(contentStyle['paddingTop'], 10);

      if (contentHeight === 360) {
        this.elements.content.classList.add('has-scrollbar');
      } else {
        this.elements.content.classList.remove('has-scrollbar');
      }

      this.elements.contentHolder.style.height = `${contentHeight}px`;
    } else {
      this.elements.contentHolder.style.height = 0;
    }
  }

  /**
   * Handle clicks inside the cart.
   *
   * @param {MouseEvent} event
   */
  handleClick(event)
  {
    // Click is on the cart's body
    if (event.target == this.base) {
      this.base.classList.toggle('is-expanded');

      this.updateSize();
    }

    // Click is on a remove button
    if (event.target.classList.contains('cart-item__remove')) {
      event.target.parentNode.parentNode.member.handleClick(event);
    }
  }
}
