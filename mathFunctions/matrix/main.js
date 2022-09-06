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
    this.arrayMatrix = newMatrix;
    return this;
  };
  getNum = (row, collumn) => {
    if (row < 0 || collumn < 0)
      throw new Error('index numbers cannot be negative');
    if (row % 1 || collumn % 1) throw new Error('index must be integer');
    if (row > this.arrayMatrix.length || collumn > this.arrayMatrix[0].length)
      throw new Error('index out of matrix boundaries');
    return this.arrayMatrix[row - 1][collumn - 1];
  };
}

const Matrix = {
  create(...twoDimArray) {
    if (!twoDimArray.every((array) => array.length === twoDimArray[0].length))
      throw new Error('rows must be equall sized');

    return new MatrixElement(twoDimArray);
  },
  add(firstMatrix, secondMatrix) {
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
        newMatrix[row][collumn] =
          firstMatrix.arrayMatrix[row][collumn] +
          secondMatrix.arrayMatrix[row][collumn];
      }
    }

    return new MatrixElement(newMatrix);
  },
  add(firstMatrix, secondMatrix) {
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
        newMatrix[row][collumn] =
          firstMatrix.arrayMatrix[row][collumn] +
          secondMatrix.arrayMatrix[row][collumn];
      }
    }

    return new MatrixElement(newMatrix);
  },
  subtract(firstMatrix, secondMatrix) {
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
        newMatrix[row][collumn] =
          firstMatrix.arrayMatrix[row][collumn] -
          secondMatrix.arrayMatrix[row][collumn];
      }
    }

    return new MatrixElement(newMatrix);
  },
};

module.exports = Matrix;
