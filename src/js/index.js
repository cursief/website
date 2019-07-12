import Members from './modules/Members';
import Cart from './modules/Cart';
import ContactForm from './modules/ContactForm';
import ScrollHandler from './modules/ScrollHandler';

window.addEventListener('load', () => {
  const contactForm = new ContactForm('.section--contact');
  const cart = new Cart(contactForm);
  new Members(cart);
  new ScrollHandler({
    header: '.header--primary',
    sections: 'main section',
    cart: cart
  });
});
