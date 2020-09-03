export default class Api {
    constructor(url) {
        this.url = url;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    async getData() {
        const response = await fetch(this.url)
        const data = await response.json();
        return data;
    }
}