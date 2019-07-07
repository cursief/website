import Members from './modules/Members';
import Cart from './modules/Cart';
import ActiveSection from './modules/ActiveSection';
import ContactForm from './modules/ContactForm';

window.addEventListener('load', () => {
  new Members(new Cart());
  new ActiveSection('main section');
  new ContactForm('.contact__form');
});
