let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let earlyRegistration = true;
let runAge = 19;

if (runAge > 18 && earlyRegistration) {
  raceEarly = raceNumber + 1000;
  console.log(raceNumber);
}

if (runAge > 18 && earlyRegistration) {
  console.log("You will race at 0930, racer #" + raceEarly);
}
else if (runAge > 18 && !earlyRegistration) {
  console.log("You will race at 1100, racer #" + raceNumber);
}
else if (runAge < 18) {
  console.log("You will race at 1230, racer #" + raceNumber);
}
else if (runAge = 18) {
  console.log("See Registration Desk");
}
else {
  console.log("CRITICAL ERRRRRRRRORRRR");
}