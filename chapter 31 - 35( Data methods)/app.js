// // 1. Write a program that displays current date and time in  your browser.

var rightnow = new Date();
console.log(rightnow)
rightnow.toString();
console.log(typeof(rightnow))

// . Write a program that alerts the current month in words.  For example December.

var a = new Date();
a.toString;
var b = a.toString();
var c = b.slice(4,7);
if (c === "Jan"){
   alert("Current month: January")
}else if(c === "Feb"){
   alert("Current month: February")
}else if(c === "Mar"){
   alert("Current month: March")
}else if(c === "Apr"){
   alert("Current month: April")
}else if(c === "May"){
   alert("Current month: May")
}else if(c === "Jun"){
   alert("Current month: June")
}else if(c === "Jul"){
   alert("Current month: July")
}else if(c === "Aug"){
   alert("Current month: August")
}else if(c === "Sep"){
   alert("Current month: September")
}else if(c === "Oct"){
   alert("Current month: October")
}else if(c === "Nov"){
   alert("Current month: November")
}else if(c === "Dec"){
   alert("Current month: December")
}

//  Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show  Sun.

 var a = new Date();
a.toString;
 var b = a.toString();
 var c = b.slice(0,3);
 console.log("Today is " + c)

// 4. Write a program that displays a message “It’s Fun day” if  its Saturday or Sunday today.

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    alert("It's Fun Day")
}else if(c === "Sun"){
    alert("It's Fun Day")
}

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(8,10);
if(c < 16){
    document.write("First fifteen days of the month")
}
else {
    document.write("Last fifteen days of the month")
}

// . Write a program that determines the minutes since  midnight, Jan. 1, 1970

var currentDate = new Date();
var miliseconds = currentDate.getTime();
var minutes = currentDate.getMinutes();
var minutes= ((miliseconds)/1000*60*60)
var diff = minutes - miliseconds;
var diffMinutes = diff/(1000*60*60);
var Mins = Math.floor(diffMinutes);
console.log("Elapsed milliseconds since midnight, Jan 1, 1970: " + miliseconds);
console.log("Elapsed minutes since midnight, Jan 1, 1970: " + Mins)

// . Write a program that tests whether it's before noon and  alert “Its AM” else “its PM”.

var a = new Date();
var b = a.toString();
var c = b.slice(16,18);
if (c<= 12 && c> -1){
    console.log("Its AM")
}
else { (c >12 &&  c <= 24)
console.log("Its PM")
}

// Write a program that creates a Date object for the last day  of the last month of 2020 and assigns it to variable named  laterDate.

var laterDate = new Date();
d.setFullYear(2020, 12, 0);
console.log(laterDate)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?

var radman2015 = new Date("06/18/2015");
var ramdan2022 = new Date("04/02/2022");
var difference = ramdan2022.getTime() - radman2015.getTime();
var difference = difference / (1000 * 3600 * 24);
console.log(difference + "Days have passed since 1st Ramdan 2015");

//. Write a program that displays in your browser the seconds that elapsed between the reference date and the  beginning of 2015.

var begningdate = new Date(01/01/2015);
var refernceDate = new Date();
var difference = refernceDate.getTime() - begningdate.getTime();
var difference = difference/(1000)
console.log(difference + " Had passed since beginning of 2015")

// 11. Create a Date object for the current date and time.  Extract the hours,

var v = new Date();
console.log("curren date : " + v);
 v.setHours(v.getHours() - 1);
console.log("after 1 hour it was " + v);

// . Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var v = new Date();
v.setFullYear(v.getFullYear() - 100);
alert("100 years back it was " + v)

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var a = new Date(prompt("Type your date of birth : "))
var b = new Date();
var c = b-a;
var d = c/(1000*60*60*24*365)
var t = Math.round(d)
document.write("your age is : " + t + "<br>" + "your birth year is 1999")

// 14. Write a program to generate your K-Electric bill in your browser.

var billdate = new Date();
var customerName =  prompt("Write Customer Name :")
var month = prompt("Bill Of Which Month :  ")
var units = prompt("Write Units : ")
var charges =  prompt("Charges  Per Units  is : ")
var payable = units * charges;
var latepay =  350;
var gross = payable+    latepay;

document.write("<h1>K-Electric Bill</h1>" + "<br>")
document.write("Customer name : " + customerName + "<br>")
document.write("Month : " + month+ "<br>")
document.write(" Number of units : " + units+ "<br>")
document.write("charges per units : " +charges + "<br>")
document.write( " Net Amount Payable (With In Due Date ) : " + payable+ "<br>")
document.write(" Late Payment Surcharge : " + latepay + "<br>");
document.write(" Gross Amount Payable (After Due Date " + gross)
