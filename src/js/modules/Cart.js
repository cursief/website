export default class Cart
{
  constructor()
  {
    this.base = document.querySelector('.cart');

    this.elements = {
      amount: this.base.querySelector('.cart__amount'),
    };

    this.contents = [];

    this.update();
  }

  add(member)
  {
    // Check if already added
    if (this.contents.indexOf(member) !== -1) {
      return;
    }

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
  }
}
