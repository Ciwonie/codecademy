function getSleepHours(day) {
    day = day.toLowerCase();
    if (day === 'monday') {
      return 6;
    }
    else if (day === 'tuesday') {
      return 6;
    }
    else if (day === 'wednesday') {
      return 6;
    }
    else if (day === 'thursday') {
      return 6;
    }
    else if (day === 'friday') {
      return 8;
    }
    else if (day === 'saturday') {
      return 9;
    }
    else if (day === 'sunday') {
      return 7;
    }
  };
  console.log('Hours of sleep per day:')
  console.log('Monday: ' + getSleepHours('monday'));
  console.log('Tuesday: ' + getSleepHours('tuesday'));
  console.log('Wednesday: ' + getSleepHours('wednesday'));
  console.log('Thursday: ' + getSleepHours('thursday'));
  console.log('Friday: ' + getSleepHours('friday'));
  console.log('Saturday: ' + getSleepHours('saturday'));
  console.log('Sunday: ' + getSleepHours('sunday'));
  
  function getActualSleepHours() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  };
  
  console.log("Total hours per week: " + getActualSleepHours());
  
  function getIdealSleepHours() {
    var idealHours = 8;
    return idealHours * 7;
  };
  
  console.log('Ideal hours of sleep per week: ' + getIdealSleepHours());
  
  function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('Wow, you got more sleep than needed!');
      console.log('You got ' + (acutalSleepHours - idealSleephours) + ' hours more than needed.');
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log('You could really use some rest.');
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less than needed.' )
    }
  };
  
  calculateSleepDebt();