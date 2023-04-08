/* 
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

// const massMark = 78;
// const massJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

function compareBMI(massMark, heigtMark, massJohn, heightJohn) {
  const markBMI = massMark / heigtMark ** 2;
  const johnBMI = massJohn / heightJohn ** 2;
  const markHigherBMI = markBMI > johnBMI;
  return markHigherBMI;
}

console.log(compareBMI(78, 1.69, 92, 1.95));
console.log(compareBMI(95, 1.88, 85, 1.76));
