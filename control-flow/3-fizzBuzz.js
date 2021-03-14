
const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN; 

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz'; 

  if (input % 3 === 0)
    return 'Fizz'; 

    if (input % 5 === 0)
    return 'Buzz'; 

  return input; 
}

for (let i = 1; i <= 100; i++) {
  let out = '';
  if (i % 3 === 0) out += 'Fizz';
  if (i % 5 === 0) out += 'Buzz';
  console.log(out || i);
}
