//Place for testing comands:
const Hausbrandt = require('./mathFunctions/hausbrandt/main');

const test = new Hausbrandt(7.75, 6.25, 5.5, 4.0)
  .addValues(1.1, 1.3, 1.2, 1.4)
  .addValues(3.1, 3.12, 3.11, 3.13)
  .calcFunctions();

const [xc, yc] = [
  test.functions['simple']['lowwer']['1'],
  test.functions['simple']['lowwer']['2'],
];

console.log(xc, yc);
