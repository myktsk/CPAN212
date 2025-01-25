import lodash from "lodash";

//1. Create a list of holiday objects with name and date [i.e: Christmas, Canada Day, New Year etc]
const holidays = [
  { name: "Christmas", date: new Date("2025-12-25") },
  { name: "Canada Day", date: new Date("2025-07-01") },
  { name: "April Fools", date: new Date("2025-04-01") },
];

//2. Iterate over an array of holidays and print the number of days until each holiday from today
const today = new Date();
holidays.forEach((holiday) => {
  const diffInMilliSeconds = holiday.date - today;
  const daysUntil = Math.ceil(diffInMilliSeconds / (1000 * 60 * 60 * 24));
  console.log(`Days until ${holiday.name}: ${daysUntil}`);
});

//3. Use the Lodash library to output the name and date of a random holiday
const randomHoliday = lodash.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

//4. Use Lodash library to output indexes of “Christmas” and “Canada Day” holidays
const christmasIndex = lodash.findIndex(holidays, { name: "Christmas" });
const canadaDayIndex = lodash.findIndex(holidays, { name: "Canada Day" });

console.log(`Christmas index: ${christmasIndex}`);
console.log(`Canada Day index: ${canadaDayIndex}`);
