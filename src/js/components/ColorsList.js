export default class ColorsList {
    constructor(container) {
        this.container = container;
    }

    render = (rows) => {
        rows.forEach((item) =>this.container.appendChild(item))
    }
}