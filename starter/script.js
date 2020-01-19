/*************
* Variables and data types
*/
/*
var firstName = 'John'; 
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/******
 * Variable Mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

//Type coercion: The variable age (number) is automatically changed to a string;
console.log(firstName + ' ' + age);

//Declare multiple variables on the same line;
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/**********
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/********
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
//x = x * 2;
x *= 2
console.log(x);
x += 10
console.log(x);
// 3 below are all the same, third one is easier to write
x = x + 1;
x += 1;
x++;
console.log(x);
x--;
console.log(x);
*/



/****************
 * CODING CHALLENGE 1
 */

 /*
 Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
 (mass in kg and height in meter).

 1. Store Mark's and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about wheather Mark has a higher BMI than John.
 4 Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

 GOOD LUCK 😀
 */
/*
 var johnMass, johnHeight, markMass, markHeight;
 johnMass = 75; // kg
 johnHeight = 1.7; // meters
 markMass = 80;
 markHeight = 1.9;
 
 var johnBMI = johnMass / (johnHeight * johnHeight);
 var markBMI = markMass / (markHeight * markHeight);

 console.log('John\'s BMI = ' + johnBMI);
 console.log('Mark\'s BMI = ' + markBMI);

 var highestBMI = markBMI > johnBMI;


 console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI);
 */


 /*********
  *  If / else statements
  */
/*
  var firstName = 'John';
  var civilStatus = 'single';

  if (civilStatus === 'married') {
      console.log(firstName + ' is married!');
  } else {
      console.log(firstName + ' will hopefully marry soon :)');
  }

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var johnMass, johnHeight, markMass, markHeight;
johnMass = 75; // kg
johnHeight = 1.7; // meters
markMass = 80;
markHeight = 1.9;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

console.log('John\'s BMI = ' + johnBMI);
console.log('Mark\'s BMI = ' + markBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

//var highestBMI = markBMI > johnBMI;
//console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI);
*/


/********
 * Boolean Logic
 */
/*
 var firstName = 'John';
 var age = 13;

 if (age < 13) {
    console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
 } else {
    console.log(firstName + ' is a man.');
 }
*/

/*****
 * The Ternary Operator and Switch Statements
 */

 /*
 var firstName = 'John';
 var age = 17;

 //Ternary operator has 3 parts that interact with eachother 
 // 1. condition age >= 18   ?
 // 2. if block console.log(firstName + ' drinks beer.')    :
 // 3. else block console.log(firstName + ' drinks juice.');
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); 

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Ternary operators are ideal for simple conditions like the one above, something more complex would suit an 'if statement'.

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/**************
 * Truthy and Falsy values and equality operators
 */
/*
 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;


 height = 0;

 if (height || height === 0) {
     console.log('Variable is defined.');
 } else {
     console.log('Variable has NOT been defined.');
 }

// Equality operators
 if (height == '23') {
     console.log('The == operator does type coercion!');
 }

 // == operator will convert a number to a string or vice versa (type coercion) while a === is 'strict' and will NOT convert

//IT IS BEST PRACTICE TO ALWAYS USE === TO AVOID ANY UNEXPECTED SITUATIONS AND BUGS IN YOUR CODE
*/


/********************************
 * CODING CHALLENGE 2
 */

 /*
 John and Mike both play basketball in different teams. In the latest 3 days, John's team scored 89, 120 and 103 points, while Mike's team scored 166, 94 and 123 points.

 1. Calculate the average score for each team
 2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
 3. Then change the scores to show different winners. Dont' forget to take into account there might be a draw (the same average score)

 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

 GOOD LUCK 😀
 */

 // calculated average by adding up scores and dividing by number of games (3)
/*
var johnScores = 89 + 120 + 103;
var mikeScores = 116 + 94 + 123;
var maryScores = 97 + 134 + 105;

var gamesPlayed = 3;

var johnAvgScore = johnScores / gamesPlayed;
var mikeAvgScore = mikeScores / gamesPlayed;
var maryAvgScore = maryScores / gamesPlayed;

// If statement solution
if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John\'s team wins with an average score of ' + johnAvgScore + '.');
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log('Mike\'s team wins with an average score of ' + mikeAvgScore + '.');
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore){
    console.log('Mary\'s team wins with an average score of ' + maryAvgScore + '.');
} else {
    console.log('Tie game, both Mike, John, and Mary\'s team have the same average score.');
}

// Switch statement solution
switch (true) {
    case johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore:
        console.log('John\'s team wins with an average score of ' + johnAvgScore + '.');
        break;
    case mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore:
        console.log('Mike\'s team wins with an average score of ' + mikeAvgScore + '.');
        break;
    case maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore:
        console.log('Mary\'s team wins with an average score of ' + maryAvgScore + '.');
        break;
    default:
        console.log('Tie game, both Mike, John, and Mary\'s team have the same average score.');
}
*/


/**************
 * Functions
 */
/*
function calculateAge(birthYear) {
     return 2020 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

//MAIN RULE OF CODE = D.R.Y = DONT REPEAT YOURSELF
//Functions are an excellent solution to this rule.


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1973, 'Lizzy');
yearsUntilRetirement(1985, 'Sam');
yearsUntilRetirement(1948, 'Grandma');
*/



/*********************
 * Function Statements & Expressions
 */
/*
 // Function Declaration
 // function whatDoYouDo(job, firstName) {}


 // Function expression
 var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a taxi around London.';
        case 'designer':
            return firstName + ' builds beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'));

 //whenever Javascript expects a value we always write an expression.
 // Statements do things but dont produce immediate results like an expression does. Examples would be if else statements, while loop, or function declaration


 */


 /******************
  * Arrays
  */
/*
  //an array is like a collection of variables and-or datatypes
  // Initialize new array
/////////////////0///////1////////2//////////////
  var names = ['John', 'Mark', 'Jane'];
  var years = new Array(1990, 1969, 1948);

  console.log(names[0]); //access first name in array
  console.log(names); //access all elements in array
  console.log(names.length); //number of elements in array


  // Mutuate array data
  names[1] = 'Ben';
  names[names.length] = 'Mary';
  console.log(names);

  // Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];

 john.push('blue'); //adds element to end of array
 john.unshift('Mr.'); //adds element to front of array
 console.log(john);

 john.pop() //removes last element of array
 john.pop()
 john.shift() // removes first element of array
 console.log(john);

 console.log(john.indexOf(1990)); // returns the position which the element is in the array, if its in the array -- if element is not in the array it will return -1

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/************************
 * CODING CHALLENGE
 */

 /*
 John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

 To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

 In the end, John would like to have 2 arrays:
 1) Containing all three tips (one for each bill)
 2) Containing all three final paid amounts (bill + tips).

 (NOTE: To calculate 20% of a value, simple multiply it with 20/100 = 0.2)

 GOOD LUCK 😀
 */
/*

 var restaurantBill = [124, 48, 268];
 

 function tipCalculator(restaurantBill) {
    if (restaurantBill < 50) {
        return restaurantBill * (20 / 100);
    } else if (restaurantBill <=200 && restaurantBill >= 50) {
        return restaurantBill * (15 / 100);
    } else {
        return restaurantBill * (10 / 100);
    }
 }

 var tipAmount = [];

 tipAmount.push(tipCalculator(restaurantBill[0]),
                tipCalculator(restaurantBill[1]),
                tipCalculator(restaurantBill[2])); 
 

 console.log(tipAmount);

 console.log('The tip for the first bill is $' + tipAmount[0]);
 console.log('The tip for the second bill is $' + tipAmount[1]);
 console.log('The tip for the third bill is $' + tipAmount[2]);

 var totalBill = [];

 totalBill.push(tipAmount[0] + restaurantBill[0]); 
 totalBill.push(tipAmount[1] + restaurantBill[1]); 
 totalBill.push(tipAmount[2] + restaurantBill[2]); 

 console.log(totalBill);

 console.log('The total for the first bill including tip is $' + totalBill[0]);
 console.log('The total for the first bill including tip is $' + totalBill[1]);
 console.log('The total for the first bill including tip is $' + totalBill[2]);

*/


/******************* 
 * Objects
*/
/*
// The difference between Arrays and Objects is that Arrays the order matters a lot, while in Objects it does not.

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************** 
 * Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;    
    }
};

john.calcAge();

//this. means the current object

john.calcAge();

console.log(john);
*/

/************************
 * CODING CHALLENGE 4
 */

 /*
 Let's remember when the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
 1. For each of them, create an object with properties for their full name, mass and height.
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 3. In the end, log to the console whoe has the highest BMI, together with the fulll name and the respective BMI. Don't forget they might have the same BMI.

 Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

 GOOD LUCK 😀 
 */

/*
var john = {
    fullName: 'John Smith',
    mass: 82,
    height: 1.9,
    calcBMI: function() {
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass: 72,
    height: 1.75,
    calcBMI: function() {
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' BMI is higher than ' + john.fullName + ' at ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' BMI is higher than ' + mark.fullName + ' at ' + john.bmi);
} else {
    console.log(john.fullName + ' & ' + mark.fullName + ' have the same BMI');
}

*/

/************************
 *  Loops and iteration
 */
/*
//loops are good for repetative tasks
// i is a standard variable counter in JS
// FOR LOOP
/////starting///until//increment/////////
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit loop!

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

//1, 3, 5, 7, 9, 11, 13, 15, 17, 19, exit loop!
  
//LOOPING THROUGH ARRAYS
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
/////startpoint// until //increment///
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//WHILE LOOP (BUT USE FOR LOOP FOR NOW)
var i = 0
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements 
/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// LOOPING BACKWARDS

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/*************************
 *  CODING CHALLENGE 5
 */
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family whent to 5 different restaurants. The bils were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculartor using the objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paids amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bills is between $100 and $300, abnd 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentagee = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    // How the 'sum' section works[2, 6, 4] -> 0 / 2 / 8 / 12
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);
console.log(john.average, mark.average);

if (mark.average > john.average) {
    console.log(mark.fullName + ' has a higher tip average than ' + john.fullName + ' with an average of $' + mark.average + '.')
} else if (john.average > mark.average) {
    console.log(john.fullName + 'has a higher tip average than ' + mark.fullName + ' with an average of $' + john.average + '.')
} else (john.fullName + ' & ' + mark.fullName + ' have the same tip average.')


amanda = {
    fullName: 'Amanda Nunes',
    strikes: [10, 37, 28, 27]
}

connor = {
    fullName: 'Connor Mcgregor',
    strikes: [10, 36, 28, 27]
}

max = {
    fullName: 'Max Holloway',
    strikes: [10, 37, 29, 27]
}



function strikeAvg(strikes) {
    var sum = 0;
    for (i = 0; i < strikes.length; i++) {
        sum = sum + strikes[i];
    }
    return sum / strikes.length;

}

max.average = strikeAvg(max.strikes);
connor.average = strikeAvg(connor.strikes);
amanda.average = strikeAvg(amanda.strikes);
console.log(max.average);
console.log(connor.average);
console.log(amanda.average);

if (max.average > connor.average && max.average > amanda.average) {
    console.log(max.fullName + ' has more strikes than the other fighters with an average of ' + max.average + ' strikes.')
} else if (connor.average > max.average && connor.average > amanda.average) {
    console.log(connor.fullName + ' has more strikes than the other fighters with an average of ' + connor.average + ' strikes.')
} else if (amanda.average > connor.average && amanda.average > max.average){
    console.log(amanda.fullName + ' has more strikes than the other fighters with an average of ' + amanda.average + ' strikes.')
} else {
    console.log('All fighters have the same strike average')
}
*/

