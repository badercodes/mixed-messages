// random array element generator
const randomString = (arr) => {
  let randomPosition = Math.floor(arr.length * Math.random());
  return arr[randomPosition];
};

// main execution thread
const first = ["You are lucky\n", "You are fortunate\n", "You are blessed\n"];
