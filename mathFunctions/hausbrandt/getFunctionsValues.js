const { infSum, fixNumber } = require('../calculus.js');

module.exports = ({ dataCollumns, f1, f2, f0 }) => {
  return {
    f1,
    f2,
    f0,
    simple: {
      lowwer: {
        1: fixNumber(f1 / infSum(dataCollumns, ({ c, d }) => c + d)),
        2: fixNumber(f2 / infSum(dataCollumns, ({ c, d }) => c + d)),
      },
      upper: {
        1: fixNumber(f1 / infSum(dataCollumns, ({ a, b }) => a + b)),
        2: fixNumber(f2 / infSum(dataCollumns, ({ a, b }) => a + b)),
      },
    },
    quadratic: {
      lowwer: {
        1: fixNumber(f1 / infSum(dataCollumns, ({ c, d }) => c ** 2 + d ** 2)),
        2: fixNumber(f2 / infSum(dataCollumns, ({ c, d }) => c ** 2 + d ** 2)),
      },
      upper: {
        1: fixNumber(f1 / infSum(dataCollumns, ({ a, b }) => a ** 2 + b ** 2)),
        2: fixNumber(f2 / infSum(dataCollumns, ({ a, b }) => a ** 2 + b ** 2)),
      },
    },
  };
};
