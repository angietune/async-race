import './styles.scss';
import { Async } from './async';
import { PageBtns } from './ui';
import { Garage } from './garage';
import { Winners } from './winners';

const http = new Async;
const pageBtns = new PageBtns;
const garage = new Garage;
const winners = new Winners;

pageBtns.renderHeader();

pageBtns.garageBtn.addEventListener('click', garage.renderGarage);
pageBtns.winnersBtn.addEventListener('click', winners.renderWinners);

// User Data
// const data = {
//     name: 'Mazda',
//     color: 'red',
//   }
  
// Create User
//   http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
  
  // Update Post
  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));
  
  // Delete User
//   http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

