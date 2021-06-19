import './styles.scss';
import { Create } from './create';

const create = new Create;

export class Options {
    container: HTMLElement = document.querySelector('body');
    options: HTMLElement = document.createElement('div');

    renderOptions() {
        this.container.appendChild(this.options);
        this.options.className = 'options';
        this.options.innerHTML = `
        <div class='create'>
            <input type="text" id="create">
            <input type="color" id="create-color">
            <button id="create-btn" onclick="${create.addCar}">create</button>
        </div>
        <div class='update'>
            <input type="text" id="update">
            <input type="color" >
            <button id="create-btn">update</button>
        </div>
        <div class='btns'>
            <button id="race">race</button>
            <button id="reset">reset</button>
            <button id="generate">generate cars</button>
        </div>
        `;
    }
}

// onclick="${create.addCar}"