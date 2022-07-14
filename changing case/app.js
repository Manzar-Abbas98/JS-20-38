// 1. Write a program that takes user input. Convert and show the input  in capital letters.

var  userInput =  prompt("type something :");
userInput = userInput.toUpperCase();
document.write(userInput);

// 2. Write a program that takes user input. Convert and show the  input in title case.

var city = prompt("Type anything which you want: ?")
var firstChar =  city.slice(0,1);
var otherChar = city.slice(1)
firstChar = firstChar.toUpperCase()
otherChar = otherChar.toLowerCase()
var typed =  firstChar + otherChar;
document.write(typed) 

// Strings: measuring length and extracting parts

var mobileModel = prompt("Whats your mobile phone model: ? ")
var length = mobileModel.length;
document.write(length);

// Write a program to display the last character of a user input.

var userInput = prompt("type something about yourself");
var x = userInput.slice(-1)
document.write(x) 

// 1. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

var a = "pakistani";
 var b = a.indexOf("n");
 document.write(b);
 
// 2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . ,  !), prompt the user to enter a valid username.
 
function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="The quick brown fox jumps over the lazy dog"; 
 var count=countOccurences(text,"the");
 console.log(count)

 // Write a program to find the character at 3 rd index in the word  “Pakistani” and display the result in your browser.
 
var country = "Pakistani";
 var indexcount = country[3]
 console.log(indexcount)

// Write a program to replace the “Hyder” to “Islam” in the word  “Hyderabad” and display the result in your browser.

var myCity = "Hyderabad";
var nameChange = myCity.replace("Hyder", "Islam")
console.log(nameChange)

// 2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together."
var changeString = message.replace(/and/g,"&")
console.log(changeString)

//1. Write a program that takes a positive integer from user & display  the following in your browser.

var userInput =  prompt("Enter any Positive Integer: ")
console.log(Math.round(userInput));
console.log(Math.floor(userInput));
console.log(Math.ceil(userInput));

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.

var userInput =  prompt("Enter any Positive Integer: ")
console.log(Math.round(userInput));
console.log(Math.floor(userInput));
console.log(Math.ceil(userInput));

// Generating random numbers

var dice = Math.random();
var dicechances = (dice*6)+0.5;
console.log(Math.round(dicechances))

// // 2. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

var coin = Math.random();
var coinchances = (coin*2)+0.5
console.log(Math.round(coinchances))

// 3. Write a program that stores a random secret number from 1 to 10 in a  variable.

var secreteNumber = Math.random();
var numbers = (secreteNumber*10) +0.5;
console.log(numbers)
var input = prompt("Enter any random number between 1 to 10: ")
if ( numbers == input){
console.log("you won!")
}

//1. Write a program that asks the user about his weight.

var weight = prompt("What is your weight: ");
weight = Number(weight)
document.write(weight);

// Converting strings to numbers, numbers to strings

var string1 = "472";
var num1 = Number(string1);
document.write(typeof(string1))

// 2. Write a program that converts the variable num to string.

var num  = 35.36;
var changeIntoString = num.toString();
console.log(changeIntoString)
console.log(typeof(changeIntoString))

// Controlling the length of decimals

var percentage = 66.666666666666
var controlLength = percentage.toFixed(2)
console.log(controlLength)

















