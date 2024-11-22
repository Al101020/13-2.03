import data from './contact-list.json';

console.log(data);

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

    renderUsers() {
        const fullHtml = this._users.map(user => {
            const itemHtml = this.renderItem(user);

            return itemHtml;
        }).join('');

        this._element.innerHtml = fullHtml;
    }
}