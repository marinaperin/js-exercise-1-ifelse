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

let userAge = prompt('What is your age?');
let userAgeNumber = parseInt(userAge);
if (userAgeNumber < 13){
    alert('You can only see PG rated movies');
} 
if (17 > userAgeNumber && userAgeNumber >= 13){
    alert('You can see PG and PG-13 rated movies');
}
if (userAge >= 17){
    alert('You can see all the movies');
}

/* THE DISCOUNT CALCULATOR */

let originalPrice = prompt('What is the original price?');
let discountPercentage = prompt('What is the discount percentage? (no % needed)');
let originalPriceNumber = parseInt(originalPrice);
let discountPercentageNumber = parseInt(discountPercentage);
let discountAmount = originalPriceNumber * discountPercentageNumber / 100;
let finalPrice = originalPrice - discountAmount;
if (discountPercentageNumber > 50){
    alert('This is a great deal!');
}

/* THE BMI CALCULATOR */

let userWeight = prompt('How much do you weigh? (in kilograms)');
let userHeight = prompt('How tall are you? (in meters)');
let userWeightNumber = parseInt(userWeight);
let userHeightNumber = parseInt(userHeight);
let userBmi = userWeightNumber / (userHeightNumber^2);
if (userBmi < 18.5){
    alert('You are underweight');
}
if (24.9 >= userBmi && userBmi >= 18.5){
    alert('You are normal weight');
}
if (userBmi >= 25){
    alert('You are overweight');
}

/* THE LEAP YEAR CHECKER */

let year = prompt('Choose a year');
let yearNumber = parseInt(year);
if (yearNumber%4==0 && !yearNumber%100==0 || yearNumber%400==0){
    alert('It is a leap year');
}else{
    alert('It is not a leap year');
}

/* THE GRADE ASSIGNER */

let userTestScore = prompt('What is your test score?');
let userTestScoreNumber = parseInt(userTestScore);
if (userTestScoreNumber >= 90){
    alert('You got an A!');
}
if (90 > userTestScoreNumber && userTestScoreNumber >= 80){
    alert('You got a B!');
}
if (80 > userTestScoreNumber && userTestScoreNumber >= 70){
    alert('You got a C!');
}
if (70 > userTestScoreNumber && userTestScoreNumber >= 60){
    alert('You got a D!');
}
if (60 > userTestScoreNumber){
    alert('You got an F!');
}