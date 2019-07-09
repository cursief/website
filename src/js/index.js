import Members from './modules/Members';
import Cart from './modules/Cart';
import ContactForm from './modules/ContactForm';
import ScrollHandler from './modules/ScrollHandler';

window.addEventListener('load', () => {
  const cart = new Cart();

  new Members(cart);
  new ContactForm('.contact__form');
  new ScrollHandler({
    header: '.header--primary',
    sections: 'main section',
    cart: cart
  });
});
