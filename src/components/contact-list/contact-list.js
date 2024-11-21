import './contact-list.css';

import data from './contact-list.json';

import { containsPhone, containsText, filterBy } from '../../js/filter'; // console.log(data);

const filterCb = (search, contact) => {
    return containsPhone(contact.phone_number, search) || containsText(contact.first_name + ' ' + contact.last_name, search);
};

export class ContactList {
    constructor(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        this._element = element;

        this._users = data;
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
            <div class="contact-list-item-details hidden">Подробная информация о клиенте</div>
        </li>
        `;
    }

    // renderUsers() { // первый способ
    //     const fullHtml = this._users.map(user => {
    //         const itemHtml = this.renderItem(user);

    //         return itemHtml;
    //     }).join('');

    //     this._element.innerHtml = fullHtml;
    // }

    renderUsers() { // второй способ - а вот он действительно заработал
        this._users.forEach(user => {
            const itemHtml = this.renderItem(user);

            this._element.insertAdjacentHTML('beforeend', itemHtml);
        });
    }

    filter(text) {
        const filterCallback = filterCb.bind(null, text);

        console.log(filterBy(this._users, filterCallback));
    }
}