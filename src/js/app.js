// TODO: write your code here

import { FilterWidget } from '../components/filter-widget/filter-widget';
import { ContactList } from '../components/contact-list/contact-list';

const contactList = new ContactList('.contact-list');
const filterWidget = new FilterWidget('.filter-widget', contactList.filter);

contactList.renderUsers();
contactList.filter('');

// contactList.onlistItemClick();
