const fixNumber = (numer, fix = 3) => {
  return Number(Number(numer).toFixed(fix));
};
const infSum = (dataCollumns, calcForData, fix = 3) => {
  let sum = 0;
  dataCollumns.forEach(({ a, b, c, d }) => {
    sum += fixNumber(calcForData({ a, b, c, d }));
  });
  return sum;
};
module.exports = {
  fixNumber,
  infSum,
};
