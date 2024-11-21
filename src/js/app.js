// TODO: write your code here

import { FilterWidget } from '../components/filter-widget/filter-widget';
import { ContactList } from '../components/contact-list/contact-list';

const filterWidget = new FilterWidget('.filter-widget');

const contactList = new ContactList('.contact-list');

contactList.renderUsers();
contactList.filter('m');