const { infSum } = require('../calculus.js');
const getFunctionValues = require('./getFunctionsValues.js');

class SimpleForm {
  constructor(a, b, c, d) {
    this.type = 'simple';
    this.a = [a];
    this.b = [b];
    this.c = [c];
    this.d = [d];
  }
  addValues(a, b, c, d) {
    return new ComplexForm(
      this.a[0],
      this.b[0],
      this.c[0],
      this.d[0],
      a,
      b,
      c,
      d
    );
  }
  calcFunctions() {
    this.dataCollumns = this.a.map((value, index) => {
      return {
        a: this.a[index],
        b: this.b[index],
        c: this.c[index],
        d: this.d[index],
      };
    });
    this.f1 = infSum(this.dataCollumns, ({ a, b, c, d }) => {
      return Number((a * d - b * c).toFixed(3));
    });
    this.f2 = infSum(this.dataCollumns, ({ a, b, c, d }) => {
      return Number((a * c + b * d).toFixed(3));
    });
    this.f0 = Number((this.f1 / this.f2).toFixed(3));
    this.functions = getFunctionValues(this);
    return this;
  }
}
class ComplexForm extends SimpleForm {
  constructor(a, b, c, d, a2, b2, c2, d2) {
    super(a, b, c, d);
    this.type = 'complex';
    this.a.push(a2);
    this.b.push(b2);
    this.c.push(c2);
    this.d.push(d2);
  }
  addValues(a, b, c, d) {
    this.a.push(a);
    this.b.push(b);
    this.c.push(c);
    this.d.push(d);
    return this;
  }
}
module.exports = SimpleForm;
