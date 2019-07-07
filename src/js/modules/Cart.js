export default class Cart
{
  constructor()
  {
    this.base = document.querySelector('.cart');

    this.elements = {
      amount: this.base.querySelector('.cart__amount'),
      contentHolder: this.base.querySelector('.cart__content-holder'),
      content: this.base.querySelector('.cart-content')
    };

    this.contents = [];
    this.previousContents = [];

    this.base.addEventListener('click', this.handleClick.bind(this));

    this.update();
  }

  add(member)
  {
    // Check if already added
    if (this.contents.indexOf(member) !== -1) {
      return;
    }

    const cartItemTemplate = document.querySelector('#cart-item');
    const cartItemFrag = document.importNode(cartItemTemplate.content, true);

    // We will lose the reference to the appended node, so we make a copy
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
    this.contents.push(member);
    this.update();
  }

  remove(member)
  {
    // Check if not in list
    const index = this.contents.indexOf(member);
    if (index === -1) {
      return;
    }

    console.log(member);

    member.cartItemElement.remove();

    this.contents.splice(index, 1);
    this.update();
  }

  contains(member)
  {
    if (this.contents.indexOf(member) !== -1) {
      return true;
    }

    return false;
  }

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

    this.updateSize();
  }

  updateSize()
  {
    if (this.base.classList.contains('is-expanded')) {
      let contentHeight = Array.from(this.elements.content.children).reduce((acc, child) => {
        const childStyle = window.getComputedStyle(child);
        const childRect = child.getBoundingClientRect();

        return acc + childRect['height'] + parseInt(childStyle.marginTop, 10) + parseInt(childStyle.marginBottom, 10);
      }, 0);
      contentHeight = Math.min(contentHeight, 360);
      console.log(contentHeight);
      this.elements.contentHolder.style.height = `${contentHeight}px`;
    } else {
      this.elements.contentHolder.style.height = 0;
    }
  }

  handleClick(event)
  {
    if (event.target == this.base) {
      this.base.classList.toggle('is-expanded');

      this.updateSize();
    }

    if (event.target.classList.contains('cart-item__remove')) {
      event.target.parentNode.member.addToCart(event);
    }
  }
}
