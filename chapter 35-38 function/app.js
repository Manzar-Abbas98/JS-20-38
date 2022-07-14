//  Write a function that displays current date & time in your browser.

var date = new Date();
console.log(date);

// Write a function that takes first & last name and then it greets the user using his full name.

function names(firstname , lastname) {
console.log("Hi " + firstname + " " + lastname)
}
names("manzar","abbas")

// Write a function that adds two numbers (input by user)  and returns the sum of two numbers.

function sum(num1,num2){
var add = num1 + num2 ;
   console.log("Addition of num1 and num2 is: " + add)
}
sum(parseInt(prompt()),parseInt(prompt()) )

//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator(num1,opr,num2){
    if(opr === "+"){
        return num1+num2
    }
    else if(opr === "-"){
        return num1-num2
    }
    else if(opr === "*"){
        return num1*num2
    }
    else if(opr === "/"){
        return num1/num2
    }
    else{
        return "incorrect operator"
    }
}
var resultOfMin = calculator(10,"-",6);
var resultOfDiv = calculator(10,"/",6);
var resultoOfAdd = calculator(10,"+",6);
var resultOfMulti = calculator(10,"*",6);

console.log(resultOfMin);
console.log(resultOfDiv);
console.log(resultoOfAdd);
console.log(resultOfMulti)

//. Write a function that squares its argument.

function square(value){
    return value*value;
}
var ans = square(5)
console.log(ans)

//6. Write a function that computes factorial of a number.

function fact(n){
    var fac = 1;
    if (n == 0 || n == 1){
      return fac;
    }else{
      for(var i = n; i >= 1; i--){
        fac = fac * i;
      }
      return fac;
    }
  }
  var n = 6;
  fac = fact(n)
  console.log("The factorial is "+ fac);

// Write a function that calculates the area of a rectangle

function area(base,height){
var area = (base * height) ;
console.log("Area is " + area)
}
area(parseInt(prompt()),parseInt(prompt()))

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str) {
  var len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      alert("It is not a palindrome");
    }
  }
  alert("It is a palindrome");
}
const string = prompt("Enter a string or number: ");
const value = palindrome(string);
console.log(value);

//. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

function upper(str) {
    var space = str.split(" ");
    var empty = [];
    for(var i = 0; i < space.length; i++){
        empty.push(space[i].charAt(0).toUpperCase()+space[i].slice(1));
    }
    return empty.join(' ');
  }
  console.log(upper("the quick brown fox jumps over the lazy dog"));

//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function longword(str) {
  var vart = str.match(/\w[a-z]{0,}/gi);
  var word = vart[0];
  for(var i = 1 ; i < vart.length ; i++)
  {
    if(word.length < vart[i].length)
    {
    word = vart[i];
    } 
  }
  return word;
}
console.log(longword('Web Development Tutorial'));

//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number

function charCount(str, letter) 
{
 var letterCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
console.log(charCount('JSResourceS.com', 'o'));


//14. The Geometrizer

function calcGeometry(radius) {
    var circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);

  }
  calcGeometry(2)


  function calcArea(radius){
    var area = Math.PI * radius*radius;
    console.log("The area is " + area);
  }
  calcArea(3)
