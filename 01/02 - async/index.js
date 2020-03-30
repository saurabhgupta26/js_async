/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
 testMe(); // what order should these log out? Howdy or Partnah first?
 Output: 
 Partnah
 Howdy

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => console.log("Hello"), 3000);
}
// Uncomment the following line to check your work!
 delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("Hello");
  setTimeout(() => {
    console.log("GoodBye")
  }, 2000);
}
// Uncomment the following line to check your work!
 helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
	// ADD CODE HERE
	setInterval(() => {
		console.log("hi Again");
  }, 1000);
}
// Uncomment the following line to check your work!
brokenRecord();

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  let limitedTime = setInterval(() => console.log("hi"), 1000);
  setTimeout(() => {clearInterval(limitedTime) }, 5000);
}
// Uncomment the following line to check your work!
 limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs() {
  // ADD CODE HERE
}
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
