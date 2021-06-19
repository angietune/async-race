export class PageBtns {
    container: HTMLElement = document.querySelector('body');
    header: HTMLElement = document.createElement('div');
    garageBtn: HTMLButtonElement = document.createElement('button');
    winnersBtn: HTMLButtonElement = document.createElement('button');

    renderHeader() {
        this.container.appendChild(this.header);
        this.header.className = 'header';
        this.header.appendChild(this.garageBtn);
        this.garageBtn.innerText = 'To Garage';
        this.header.appendChild(this.winnersBtn);
        this.winnersBtn.innerText = 'To Winners';
    }
}