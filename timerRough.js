/*


Alarm Clock Timer which beeps (process.stdout.write('\x07');)

after a specific amount of time has passed.

setTimeout(() => {
  process.stdout.write('\x07');
}, 1000);



######
Command Line Arguments
######


*process.argv:

// extract the command-line arguments
const args = process.argv.slice(2);
console.log("Args:", args);

// edge case: We need at least 2 arguments.


// going through each argument
// for loop
// forEach
// for (let i=0; i<args.length;i++)
// for of

for (let arg of args) {

  console.log("args:", arg);


No limit to amount of alarms.

e.g. node timer1.js 10 3 5 15 9


####
Edge Cases
####

1.
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.


2.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

3.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.



Commit and push the changes to your GitHub repo.


*/


// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments into array


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






/*






// edge case: We need at least 2 arguments, if not output an error message
if (args.length < 2) {
  console.log('Error: please enter at least 2 arguments');
  // stop the execution here
  // return; // it works!!
  process.exit();
}







// going through each argument
// for loop
// forEach
// for (let i=0; i<args.length;i++)
// for of

let total = 0;



for (let arg of args) {
  // add them up
  // edge case: If any argument is not a whole number, skip it.



// edge case: If any argument is not a number, output an error message.
if (isNaN(convertedNum)) {
  console.log('Error: please enter only numbers');
  process.exit();
}

// print the sum of them
console.log('Total:', total);





*/