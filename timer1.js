let input = process.argv.slice(2, process.argv.length);

let character = '\x07';
for (let i = 0; i <= input.length; i ++) {
  let x = Number(input[i]);
  if (! isNaN(x)) {
    if (x >= 0) {
      setTimeout(() => (process.stdout.write(character)), x * 1000);
    }
  }
}