// function that contains daily amount of hours of sleep
function getSleepHours(day)
{
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') { 
    return 8;
  } else if (day === 'wednesday') {
    return 7; 
  } else if (day === 'thursday') {
    return 7; 
  } else if (day === 'friday') {
    return 5; 
  } else if (day === 'saturday') {
    return 6;
  } else if (day === 'sunday') {
    return 10;
  } else {
    return "Enter a valid day of the week"
  }
}


// sum the total hours
function getTotalSleepHours()
{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') 
  + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}


// the ideal amount of hours
function getRequiredSleepHours(requiredHours = 7)
{
  return requiredHours * 7;
}


// calculate the sleep debt
function calculateSleepDebt()
{
  const totalSleepHours = getTotalSleepHours();
  const requiredHours= getRequiredSleepHours();

  if (totalSleepHours === requiredHours) {
    console.log('You are getting ' + totalSleepHours + ' hours which is the perfect amount of sleep'); 
  } 
  else if (totalSleepHours < requiredHours) {
  console.log('You are getting ' + totalSleepHours + ' hours, which is ' + (requiredHours - totalSleepHours) + ' hours less than you should');
  } 
  else if (totalSleepHours > requiredHours) {
  console.log('You are getting ' + totalSleepHours + ' hours, which is ' + (totalSleepHours - requiredHours) + ' hours more than you should');
  } 
  else {
  console.log(`Error`)
  }
}

calculateSleepDebt();