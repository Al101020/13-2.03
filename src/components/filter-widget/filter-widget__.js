// filter-widget.js
export class FilterWidget {
    constructor(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        this.onBtnClick = this.onBtnClick.bind(this);

        this._element = element;
        this._filterBtn = this._element.querySelector('.filter-btn');

        this._filterBtn.addEventListener('click', this.onBtnClick);
    }

    onBtnClick(e) {
        e.preventDefault();
        console.log(e);
    }
}