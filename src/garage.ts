import './styles.scss';
import { Async } from './async';
import { Cars } from './cars';
import { Options } from './options';

const http = new Async;
const carList = new Cars;
const options = new Options;

export class Garage {
    container: HTMLElement = document.querySelector('body');
    carsList: HTMLElement = document.createElement('div');

    renderGarage() {
        http.get('http://localhost:3000/garage?_page=1&limit=7')
        .then(data => carList.getCar(data))
        .catch(err => {return(err)});

        options.renderOptions();

    }

}


