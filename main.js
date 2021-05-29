import { snailSort } from './snail-sort-service.js';

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

snailSort(input)
  .then((data) => {
    console.log(data.join());
  })
  .catch((err) => console.log(err));
