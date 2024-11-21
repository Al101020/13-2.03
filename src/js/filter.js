export function filterBy(contact, filterCallback) {
    return contact.filter(filterCallback);
}
export function containsPhone(data, search) {
    const clean = search.replace(/[+ ()]/g, ''); // Удаляем +, ' ' и т.д.
    return data.startWith(clean);
}
export function containsText(data, search) {
    const clean = search.trim().toLowerCase();
    return data.toLowerCase().includes(clean);
}