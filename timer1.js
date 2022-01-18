const nums = process.argv.slice(2);
let count = 1000;
for (let num of nums) {
  if (num == NaN || num <= 0) return;
  setTimeout(() => {
    process.stdout.write('.')
  }, count * num)
}


  // process.stdout.write('./|\\');



