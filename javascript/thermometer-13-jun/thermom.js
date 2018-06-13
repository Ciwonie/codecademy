// This value is today's kelvin forcast saved as const.
let kelvin = 300;
let celsius = kelvin - 273;
// Comment explaining another constant: celsius
let fahrenheit = celsius * (9 / 5) + 32;
console.log(kelvin);
console.log(celsius);

fahrenheit = Math.floor(fahrenheit);

console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);