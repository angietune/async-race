import { Async } from './async';

const http = new Async;

export class Create {
    inputName = document.querySelector('input[id=create]');
    createColor = (<HTMLInputElement>document.getElementById('create-color')).value;

    data = {
        name: this.inputName.nodeValue,
        color: this.createColor,
    }

    addCar = () => {

        http.post('https://jsonplaceholder.typicode.com/users', this.data)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }    
}