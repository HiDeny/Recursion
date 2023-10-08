// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

//* Iteration
const fibs = (num) => {
  const result = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i += 1) {
    result.push(first);
    let step = first + second;
    first = second;
    second = step;
  }

  return result;
};

console.log(fibs(8));

// Now write another function fibsRec which solves the same problem recursively.
// This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

//* Recursion
const fibsRec = (num) => {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  return [...fibsRec(num - 1),fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}


console.log(fibsRec(8));
