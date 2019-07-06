export default class Cart
{
  constructor()
  {
    this.element = document.querySelector('.cart');
    this.contents = [];
  }

  add(member)
  {
    // Check if already added
    if (this.contents.indexOf(member) !== -1) {
      return;
    }

    this.contents.push(member);
    console.log(this.contents);
  }

  remove(member)
  {
    // Check if not in list
    const index = this.contents.indexOf(member);
    if (index === -1) {
      return;
    }

    this.contents.splice(index, 1);

    console.log(this.contents);
  }

  contains(member)
  {
    if (this.contents.indexOf(member) !== -1) {
      return true;
    }

    return false;
  }
}
