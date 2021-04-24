// random array element generator
const randomString = (arr) => {
  let randomPosition = Math.floor(arr.length * Math.random());
  return arr[randomPosition];
};

// main execution thread
const first = [
  "\nYou are lucky\n",
  "\nYou are fortunate\n",
  "\nYou are blessed\n",
];
const second = [
  "You have many blessings to be thankful for\n",
  "You are improving your coding skills!\n",
  "You are making great progress!\n",
];
const third = [
  "Keep at it!",
  "Don't stop!",
  "It's a long road but it's worth it!",
];

let output = randomString(first) + randomString(second) + randomString(third);
console.log(output);
