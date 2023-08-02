

// extract arguments from command line skipping the first two string arguments
const args = process.argv.slice(2);

//looping through command line args
for (let arg of args) {


  // numbers in command line register as strings so we're making them into numbers
  const numArg = Number(arg);
    
  //after conversion, if it's not a number and it's greater than 0 (both edge cases) then continue with function.

  if (!isNaN(numArg) && numArg > 0) {

    // setting timeout
    setTimeout(() =>
        
    // creating bell noise
      process.stdout.write('\x07')

    // timeout occuring after a set amount of seconds
    , 1000 * arg);
  }
    
}


