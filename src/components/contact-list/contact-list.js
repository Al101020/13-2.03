import './contact-list.css' // console.log('contact-list.js');

import data from './contact-list.json';// console.log(data);

import { containsPhone, containsText, filterBy } from '../../js/filter';

const filterCb = (search, contact) => {
    return containsPhone(contact.phone_number, search) || 
        containsText(contact.first_name + ' ' + contact.last_name, search);
}

export class ContactList {
    constructor(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        this.filter = this.filter.bind(this);
        this.onlistItemClick = this.onlistItemClick.bind(this);
        this.onHtmlClick = this.onHtmlClick.bind(this);
        
        this._element = element;

        this._users = data;

        this._element.addEventListener('click', this.onlistItemClick);
        document.documentElement.addEventListener('click', this.onHtmlClick, true);
    }

    renderItem(contact) {
        return `
        <li class="contact-list-item">
            <div class="contact-main">
                <img src="https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${contact.picture}" class="contact-list-item-img" alt="">
                <span class="contact-list-item-name">${contact.first_name + ' ' + contact.last_name}</span>
                <span class="contact-list-item-phone">${contact.phone_number}</span>
                <a href="tel:${contact.phone_number}" class="contact-list-item-action">Звонок</a>
            </div>
            <div class="contact-list-item-details hidden">Подробная информация о клиенте: ${contact.username}</div>
        </li>
        `;
    }

    _clear() {
        this._element.innerHTML = ''; // в ввидео говорят что это не совсем чесно или не совсем коректно, поэтому этот способ отложили
        // for (const child of this._element.children) {
        //     child.remove();
        // }
    }

    _renderItems(items) {
        this._clear();
        
        items.forEach(user => {
            const itemHtml = this.renderItem(user);

            this._element.insertAdjacentHTML('beforeend', itemHtml);
        });
    }

    renderUsers() {
        this.renderItem(this._users);
    }

    filter(text) {
        const filterCallback = filterCb.bind(null, text);

        // console.log(filterBy(this._users, filterCallback)); // эта строка в видео уделена

        this._renderItems(filterBy(this._users, filterCallback));
    }

    onlistItemClick(e) {
        console.log(e.currentTarget);
        console.log(e.target);

        const target = e.target;

        if (target.classList.contains('contact-list-item-action')) {
            return;
        }

        // e.stopPropagation(); // отменяет всплытие, усть ещё stopImmediatePropagation() примерно такойже
        e.stopImmediatePropagation(); // так же отменяет всплытие, и ещё что-то там.

        const listItem = target.closest('.contact-list-item');
        const details = listItem.querySelector('.contact-list-item-details');

        details.classList.toggle('hidden');
    }

    onHtmlClick() {
        console.log('html click');
    }
}
