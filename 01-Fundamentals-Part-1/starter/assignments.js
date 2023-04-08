// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "Ukraine";
const continent = "Europe";
let population = 38000000;
console.log(country, continent, population);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof null);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "Ukrainian";
//isIsland = true;

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

const doubleHalfPopulation = population / 2 / 2;
console.log(doubleHalfPopulation);

population++;
console.log(population);

const isFinlandGreater = 6000000 > population;
console.log(isFinlandGreater);

const lessThenAverage = 33000000 > population;
console.log(lessThenAverage);

const countryName = "Portugal";
const continentName = "Europe";
const populationPortugal = 11000000;
const languagePortugal = "portuguese";
const description = `${countryName} is in ${continentName}, and its ${
  populationPortugal / 1000000
} million people speak ${languagePortugal}`;
console.log(description);
