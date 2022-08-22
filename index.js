//Place for testing comands:
const Hausbrandt = require('./mathFunctions/hausbrandt/main');

const x = new Hausbrandt(4.243, 5.071, 1.472, 8.284);
const y = x.addValues(3.456, 1.246, 7.392, 5.853);

y.calcFunctions();

console.log(y.type, y.dataCollumns, y.functions);

// new Hausbrandt(7.75, 6.25, 5.5, 4.0)
//   .addValues(1.1, 1.3, 1.2, 1.4)
//   .addValues(3.1, 3.12, 3.11, 3.13)
