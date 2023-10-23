/* THE COFFEE SHOP */ 

let coffeePrice = 1.50;
let coffeeQuantity = prompt('How many cups of coffee were sold?');
let coffeeQuantityNumber = parseInt(coffeeQuantity);
alert('Today income was € ' + coffeePrice * coffeeQuantityNumber);


/* THE AGE CALCULATOR */

let currentYear = 2023;
let userYear = prompt('In which year were you born?');
let userYearNumber = parseInt(userYear);
alert('You are ' + (currentYear - userYearNumber) + ' years old');

/* THE TEMPERATURE CONVERTER */

let fahrenheitTemperature = prompt('How many °F is it today?');
let fahrenheitTemperatureNumber = parseInt(fahrenheitTemperature);
alert('Today there is °C ' + (fahrenheitTemperatureNumber - 32) * 5 / 9);

/* THE GRADE CALCULATOR */

let student1Score = prompt('What is student 1 score?');
let student2Score = prompt('What is student 2 score?');
let student3Score = prompt('What is student 3 score?');
let student1ScoreNumber = parseInt(student1Score);
let student2ScoreNumber = parseInt(student2Score);
let student3ScoreNumber = parseInt(student3Score);
alert('The average score is ' + ((student1ScoreNumber + student2ScoreNumber + student3ScoreNumber) / 3));

/* THE TIP CALCULATOR */

let totalBill = prompt('What is the total of the bill?');
let tipPercentage = prompt('What is the tip percentage? (no % needed)');
let totalBillNumber = parseInt(totalBill);
let tipPercentageNumber = parseInt(tipPercentage);
alert('The tip is € ' + (totalBillNumber * tipPercentageNumber / 100));

/* THE MOVIE NIGHT */

/* THE DISCOUNT CALCULATOR */

/* THE BMI CALCULATOR */

/* THE LEAP YEAR CHECKER */

/* THE GRADE ASSIGNER */