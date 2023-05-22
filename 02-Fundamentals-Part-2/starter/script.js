"use strict";

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital is ${capitalCity}.`;
}

const myCountry = describeCountry("Ukraine", "42 million", "Kyiv");
console.log(myCountry);

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const p1 = percentageOfWorld1(42);
const p2 = percentageOfWorld1(150);
const p3 = percentageOfWorld1(500);

console.log(p1, p2, p3);

const percentage = function (population) {
  return (population * 100) / 7900;
};

const x1 = percentage(42);
const x2 = percentage(150);
const x3 = percentage(500);

console.log(x1, x2, x3);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld3 = (population) =>
  ((population * 100) / 7900).toFixed(2);
console.log(percentageOfWorld3(500));

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

console.log(describePopulation("China", 1441));
