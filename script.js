function sayHi() {
  alert("Hello, stranger!");
}

function shoutGreeting() {
  var name = prompt("what is your name?");
  alert("HELLO, " + name.toUpperCase() + "!!!");
}

function evenOrOdd() {
  var number = prompt("Give me a number to check.");
  if(number % 2 === 0){
    alert("Your number is even")
  }
  else if(number % 2 === 1){
    alert("Your number is odd")
  }
  else {
    alert("That's not a number")
  };
}

function betweenNumber() {
  var number = prompt("Please give me a number greater than 3 and less than 11.");
  while (number <=3 || number >= 11) {
    number = prompt("That was not greater than 3 and less than 11. Try again.")
  };
  prompt("Thank you!" + number + " is perfect.");
}

function bottlesOfBeverage() {
  var bottles = prompt("How many bottles shall we pass around?");
  while (bottles <= 0 || isNaN(bottles)) {
    bottles = prompt("That was not a valid number of bottles.  We need a positive number of bottles.");
  }
  for(var i = bottles; i > 0; i--){
    if(i === 1){
      alert(i + " bottle of beer on the wall! " + i + " bottle of beer! Take one down and pass it around. Done.");
    }
    else {
      alert(i + " bottles of beer on the wall! Take one down now you have " + (i - 1) + "bottles of beer.");
    };
  }
}

function fizzBuzz() {
  var number = prompt("Please give us a positive number to play with.");
  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt("That was not a valid number.  We need a positive number."));
  };
  for(var i = 1; i <= number; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      prompt("FizzBuzz");
    }
    else if(i % 3 === 0){
      prompt("Fizz");
    }
    else if(i % 5 === 0) {
      prompt("Buzz");
    }
    else {
      prompt(i);
    }
  }
}

function wordReverser() {
  var originalWord = prompt("Please give me a word to reverse.");
  var reverseWord = originalWord.split("").reverse().join("");
  alert(reverseWord);
}

function driversLicense() {
  var age = prompt("How old are you? Don't lie....");
  while (age <= 0 || isNaN(age)) {
    age = parseInt(prompt("That was not a valid age.  I said don't lie!"));
  };
  if(age < 15){
    alert("You're not eligible for a license yet.");
  }
  else if(age === 15){
    alert("You can get a learner's permit.");
  }
  else if(age >= 16 && age <= 17){
    alert("You can get a license, but you can't vote yet.");
  }
  else if(age >= 18 && age < 21){
    alert("You can get a license, but you can't drink yet.");
  }
  else if(age >= 21 && age <= 24){
    alert("You can drink, but you can't rent cars yet.");
  }
  else if(age >= 25){
    alert("You have full adult privileges.");
  }
  else {
    alert("something strange happened");
  }
}

function wordSorter() {
  var words = [];
  var numberOfWords = 5;
  for(var i = 1; i <= numberOfWords; i++){
    words.push(prompt("Please give me a word to sort."));
  }
  alert(words.sort().join(" "));
}
