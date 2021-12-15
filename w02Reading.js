//2.1 looping a triangle
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

//2.2 FizzBuzz replacing multiples of three with the word "Fizz"
//and multiples of five with the word "Buzz"
for (let n = 1; n <= 100; n++) {
  let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

//2.3 Chessboard create a chessboard out of hashes and spaces
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);