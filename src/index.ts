/**
 * Create a function that takes a `gridSize` argument and returns a
 * "Multiplication Grid", starting at 1 and incrementing by 1 until reaching
 * the `gridSize` value.
 * @see https://en.wikipedia.org/wiki/Grid_method_multiplication
 *
 * @note Values in a given column should all be right-aligned.
 *
 * @example
 * // Create a 5x5 Multiplication Grid
 * createMultiplicationGrid(5);
 * // Would generate the output
 * `1  2  3  4  5
 * 2  4  6  8 10
 * 3  6  9 12 15
 * 4  8 12 16 20
 * 5 10 15 20 25`
 */

/**
 * Try and get as far as you can towards a solution. We are interested in
 * your problem-solving process, not necessarily the final result. 

 * @note Use the export and its name below as your starting point. It is
 * hooked up to a set of tests so you can track your progress towards the
 * final solution 😊
 * 
 * To view the testing panel click on the [Tests] tab in the right pane (next
 * to [Browser]).
 *
 * Good Luck, Have Fun 👍
 */

/**
 * Following function is designed according to
 * the formatting of tests 1-3.
 */

export const createMultiplicationGrid = (gridSize: number) => {
  if (gridSize < 1) {
    return "Invalid input: Please use a positive integer.\n";
  }
  let grid = "";
  let maxDigits = (gridSize * gridSize).toString().length;
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      if (col === 1) {
        grid +=
          " ".repeat(maxDigits - (row * col).toString().length) + row * col;
      } else {
        grid +=
          " ".repeat(maxDigits - (row * col).toString().length + 1) + row * col;
      }
    }
    if (row < gridSize) {
      grid += "\n";
    }
  }
  return grid;
};

/**
 * The following function designed according to
 * the formatting of test 4.
 */

/**
export const createMultiplicationGrid = (gridSize: number) => {
  if (gridSize < 1) {
    return "Invalid input: Please use a positive integer.\n";
  }

  let grid = "";
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      if (col === 1) {
        grid +=
          " ".repeat(gridSize.toString().length - row.toString().length) +
          row * col;
      } else {
        grid +=
          " ".repeat(
            (col * gridSize).toString().length -
              (row * col).toString().length +
              1
          ) +
          row * col;
      }
    }
    if (row < gridSize) {
      grid += "\n";
    }
  }
  return grid;
};
*/
