// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const arr1 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599)
console.log("%c🔴 List of inventors who were born in the 1500's ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.table(arr1)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fName = inventors.map((inventor) => inventor.first)
const lName = inventors.map((inventor) => inventor.last)
console.log("%c🔴 List of inventors' first and last names ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.log(fName,lName)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort((a,b) => a.year < b.year)
console.log("%c🔴 List of inventors oldest to youngest ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.table(oldToYoung)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)
console.log("%c🔴 Total number of years the inventors lived all together ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.log(totalAge)

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a,b) => (a.passed - a.year) < (b.passed - b.year))
console.log("%c🔴 List of inventors sorted by the number of years lived ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.table(yearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const div = document.querySelector('.mw-category').querySelectorAll('a')
// const arr = Array.from(b)
// arr.forEach((item) => item.textContent.includes('de') ? console.log(item.textContent) : null)

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByLname = people.map((item) => item.split(', '))
console.log("%c🔴 List of people sorted alphabetically by last name ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.table(sortByLname.sort((a,b) => a[1] > b[1]))

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const dataCount = data.reduce((obj,item) => {
  if (!obj[item]) {
    obj[item] = 0
  }
  obj[item]++;
  return obj
}, {})
console.log("%c🔴 Number of occurences of each item in the below array ⬇️ ",'font-size: 14px; color: #a0ffd0')
console.log(data)
console.log(dataCount)

console.log("%c😀 Thanks for checking out. \nAlso You can check actual code by clicking on the script.js beside this output. 🙏",'font-size: 14px; color: #a0ffd0')
