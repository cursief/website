import Members from './modules/Members';
import Cart from './modules/Cart';
import ContactForm from './modules/ContactForm';
import ScrollHandler from './modules/ScrollHandler';

window.addEventListener('load', () => {
  new Members(new Cart());
  new ContactForm('.contact__form');
  new ScrollHandler();
});
