const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#a0ffd0';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello")

// Interpolated
console.log("I am a %s string.",'💩')

// Styled
console.log("%cI am so Stylish 💩",'font-size: 20px; color: #a0ffd0')

// warning!
console.warn("This is a warning 💩")

// Error :|
console.error("This is an error 💩")

// Info
console.info("This is an informaition 💩")

// Testing
console.assert(1 == 2,"It is 💩")

// clearing
console.log("I don't want to run %cconsole.clear()",'color: #a0ffd0')

// Viewing DOM Elements
// console.dir(document.querySelector(".title"))
console.dirxml(document.querySelector(".title"))

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old.`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count("Log count ")
console.count("Log count ")
console.count("Log count ")
console.count("Log count ")
console.count("Log count ")
console.count("Log count ")

// timing
console.time("fetching data took : ")
fetch('https://api.github.com/users/zelfroster')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data took : ')
    console.log(data)
  });
