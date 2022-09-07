//Place for testing comands:
const Hausbrandt = require('./mathFunctions/hausbrandt/main');
const matrix = require('./mathFunctions/matrix/main');

// const test = new Hausbrandt(7.75, 6.25, 5.5, 4.0)
//   .addValues(1.1, 1.3, 1.2, 1.4)
//   .addValues(3.1, 3.12, 3.11, 3.13)
//   .calcFunctions();

// const [xc, yc] = [
//   test.functions['simple']['lowwer']['1'],
//   test.functions['simple']['lowwer']['2'],
// ];

const matrix1 = matrix.create([2, 6], [4, 0], [-1, 2]);

// console.log(matrix1.transpose().arrayMatrix);
// console.log(matrix1.getNum(1, 2));

const matrix2 = matrix.create([5, 2, 1], [3, 5, 8]);

// console.log(matrix.add(matrix1, matrix2).arrayMatrix);odwrotny
// console.log(matrix.multiply(matrix1, matrix2).arrayMatrix);

// console.log(matrix2.getNumArray());

const matrix3 = matrix.create([-2, 3], [-4, 7]);
// const matrix3 = matrix.create([2, 5, 7], [6, 3, 4], [5, -2, -3]);

console.log(matrix3.inverse().arrayMatrix);
