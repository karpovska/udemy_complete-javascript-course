// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '222';

const calcAge = birthYear => 2037 - birthYear;

//console.log(calcAge(2013));

// TODO
// FIXME
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temp1, temp2) {
	let temps = temp1.concat(temp2);
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;
		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'cels',

		// FIX the bug
		value: 10,
	};

	//B) FIND
	console.table(measurement);

	console.log(measurement.value);
	//console.warn(measurement.value);
	//console.error(measurement.value);

	const kelvin = measurement.value + 273;
	return kelvin;
};

// A) IDENTIFY the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (temp1, temp2) {
	let temps = temp1.concat(temp2);

	let max = 0;
	let min = 0;

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

const printForecast = function (arr) {
	let msg = '';

	for (let i = 0; i < arr.length; i++) {
		msg += `...  ${arr[i]} C in ${i + 1} days `;
	}
	return msg;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
