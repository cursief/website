import Members from './modules/Members';
import Cart from './modules/Cart';
import ActiveSection from './modules/ActiveSection';

new Members(new Cart());
new ActiveSection('main section');
