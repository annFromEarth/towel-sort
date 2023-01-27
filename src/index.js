
// You should implement your task here.

module.exports = function towelSort (matrix) {

  arrSorted = [];

  if (!matrix) {return [];}
  
  else if (matrix.length == 0) {return [];}
  
  else {
        for (let i=0; i<matrix.length; i++) {

          if (i%2 == 0) { arrSorted.push(matrix[i]); }

          else { arrSorted.push((matrix[i]).reverse()); }
    }

    return arrSorted.flat(2);

  }
}
