import './styles.scss';
import { Async } from './async';

const http = new Async;

export class Winners {
    renderWinners() {
        http.get('http://localhost:3000/winners')
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}