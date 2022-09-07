const Hausbrandt = require('../hausbrandt/main');
const math = require('mathjs');

class MatrixElement {
  constructor(twoDimArray) {
    this.arrayMatrix = twoDimArray;
  }
  transpose = () => {
    let newMatrix = new Array(this.arrayMatrix[0].length);
    newMatrix.fill(null);
    newMatrix = newMatrix.map((x) => {
      return new Array(this.arrayMatrix.length);
    });

    for (let row = 0; row < this.arrayMatrix.length; row++) {
      for (let collumn = 0; collumn < this.arrayMatrix[0].length; collumn++) {
        newMatrix[collumn][row] = this.arrayMatrix[row][collumn];
      }
    }
    return new MatrixElement(newMatrix);
  };
  inverse = () => {
    if (this.arrayMatrix.length !== this.arrayMatrix[0].length)
      throw new Error(
        'to inverse matrix num of rows must match num of collumns'
      );
    if (this.arrayMatrix.length !== 2)
      throw new Error(
        'inverting matrix of this size currently is not available'
      );

    const determinant = new Hausbrandt(...this.getNumArray()).calcFunctions()
      .f1;

    const complementary = new MatrixElement(
      this.arrayMatrix.map((value, rowIndex) => {
        return value.map((x, colIndex) => {
          return (
            (-1) ** (rowIndex + colIndex) *
            this.arrayMatrix[rowIndex === 0 ? 1 : 0][colIndex === 0 ? 1 : 0]
          );
        });
      })
    );

    const transposed = complementary.transpose();

    const inverted = new MatrixElement(
      transposed.arrayMatrix.map((row) => {
        return row.map((value) => {
          return math.fraction(value, determinant);
        });
      })
    );

    return inverted;
  };
  getNumArray() {
    const array = [];
    this.arrayMatrix.forEach((element) => {
      element.forEach((x) => {
        array.push(x);
      });
    });
    return array;
  }
  getNum = (row, collumn) => {
    if (row < 0 || collumn < 0)
      throw new Error('index numbers cannot be negative');
    if (row % 1 || collumn % 1) throw new Error('index must be integer');
    if (row > this.arrayMatrix.length || collumn > this.arrayMatrix[0].length)
      throw new Error('index out of matrix boundaries');
    return this.arrayMatrix[row - 1][collumn - 1];
  };
}

const joinTwoMatrices = (callback) => {
  return (firstMatrix, secondMatrix) => {
    const [fRowNum, fColNum] = [
      firstMatrix.arrayMatrix.length,
      firstMatrix.arrayMatrix[0].length,
    ];
    const [sRowNum, sColNum] = [
      secondMatrix.arrayMatrix.length,
      secondMatrix.arrayMatrix[0].length,
    ];

    if (fRowNum !== sRowNum || fColNum !== sColNum)
      throw new Error('matrices must be exact same sized');

    let newMatrix = new Array(fRowNum);
    newMatrix.fill(null);
    newMatrix = newMatrix.map((x) => {
      return new Array(fColNum);
    });

    for (let row = 0; row < fRowNum; row++) {
      for (let collumn = 0; collumn < fColNum; collumn++) {
        newMatrix[row][collumn] = callback(
          firstMatrix.arrayMatrix[row][collumn],
          secondMatrix.arrayMatrix[row][collumn]
        );
      }
    }

    return new MatrixElement(newMatrix);
  };
};

const Matrix = {
  create(...twoDimArray) {
    if (!twoDimArray.every((array) => array.length === twoDimArray[0].length))
      throw new Error('rows must be equall sized');

    return new MatrixElement(twoDimArray);
  },
  add(firstMatrix, secondMatrix) {
    const func = joinTwoMatrices((first, second) => {
      return first + second;
    });
    return func(firstMatrix, secondMatrix);
  },
  subtract(firstMatrix, secondMatrix) {
    const func = joinTwoMatrices((first, second) => {
      return first - second;
    });
    return func(firstMatrix, secondMatrix);
  },
  multiply(firstMatrix, secondMatrix) {
    const [fRowNum, fColNum] = [
      firstMatrix.arrayMatrix.length, //row
      firstMatrix.arrayMatrix[0].length, //collumn
    ];
    const [sRowNum, sColNum] = [
      secondMatrix.arrayMatrix.length, //row
      secondMatrix.arrayMatrix[0].length, //collumn
    ];
    secondMatrix = secondMatrix.transpose();
    if (fColNum !== sRowNum)
      throw new Error(
        'number of rows in first matrix must match number of collumns in second matrix during multiplying matrices'
      );
    let newMatrix = new Array(fRowNum);
    newMatrix.fill(null);
    newMatrix = newMatrix.map((x) => {
      return new Array(sColNum);
    });
    for (let matrixRow = 0; matrixRow < newMatrix.length; matrixRow++) {
      // row
      for (let matrixCol = 0; matrixCol < newMatrix[0].length; matrixCol++) {
        // collumn
        const fRow = firstMatrix.arrayMatrix[matrixRow];
        const sCol = secondMatrix.arrayMatrix[matrixCol];

        const merged = fRow.map((val, index) => {
          return val * sCol[index];
        });

        const result = merged.reduce((prev, curr) => {
          return prev + curr;
        });

        newMatrix[matrixRow][matrixCol] = result;
      }
    }
    return new MatrixElement(newMatrix);
  },
};

module.exports = Matrix;
