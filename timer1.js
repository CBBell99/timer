const nums = process.argv.slice(2);
let count = 1000;
for (let num of nums) {
  if (num === isNaN || num <= 0) return;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, count * num);
}





