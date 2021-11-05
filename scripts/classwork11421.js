/* For each of the sections, consider the array and the method.  What would you expect the output to be? */

let letters = ['l', 's', 'a', 'r', 'd', 'f']

// letters.sort() • ['a', 'd', 'f', 'l', 'r', 's']

// letters.pop() • ['a', 'd', 'f', 'l', 'r']

// letters.push('q') • ['a', 'd', 'f', 'l', 'r', 'q']

// letters.shift() • ['d', 'f', 'l', 'r', 'q']

// letters.unshift('y') • ['y', 'd', 'f', 'l', 'r', 'q']

// letters.slice(1,2) • ['y', 'f', 'l', 'r', 'q']

let names = ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson']

// names.concat(letters) • ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson', 'l', 's', 'a', 'r', 'd', 'f']

// names.join(' ') • 'John Mandeep Ruby Rose Jackson'

// names.reverse() • 'Jackson', 'Rose', 'Ruby', 'Mandeep', 'John']

let superheroes = ['Wonder Woman', 'Captain America', 'Spiderman', 'Batman', 'The Flash']

// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

// for (superhero of superheroes) {
//   console.log(`${superhero} is a superhero!`)
// }


let superheroesDetails = [
  { 
    id: 1,
    name:'Wonder Woman',
    isDC : true
  },
  {
    id: 1,
    name:'Captain America',
    isDC : true
  },
  {
    id: 1,
    name:'Batman',
    isDC : true
  },
  {
    id: 1,
    name:'The Flash',
    isDC : true
  },
  {
    id: 1,
    name:'Spiderman',
    isDC : false
  }
]
    
// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentance "<NAME> is a superhero!".

// for (let i = 0; i < superheroesDetails.length; i++) {
//   if (superheroesDetails[i].isDC === true) {
//     console.log(`${superheroesDetails[i].name} is in the Justice League.`)
//   } else {
//    console.log(`${superheroesDetails[i].name} is a superhero!`)
//   }
// };

const animals = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true
  },
  {
    id: 9,
    name: "Joel",
    trait: "playful",
    species: "dog",
    isReal: true
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true
  },
  {
    id: 1,
    name: "Lexi",
    trait: "shy",
    species: "cat",
    isReal: true
  }
]

// iterate over animals and console log each animal by the following conditions:
// if the animal is a dragon console log "I am mythical."
// if the animal is a dog console log "I bark."
// if the animal is a monkey or a rat console log the animals name and "I am a rat or monkey."
// if the animal is a cat  is needy console log "I am Sydney's cat."
// if the animal does not meet any of the above conditions console log the animals name, trait and species

for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "dragon") {
    console.log(`I am mythical.`);
  } else if (animals[i].species === "dog") {
    console.log(`I bark.`);
  } else if (animals[i].species === "rat" || "monkey") {
    console.log(`I am a rat or monkey.`);
  } else if (animals[i].species === "cat" && animals[i].trait === "needy") {
    console.log(`I am Sydney's cat.`);
  } else {
    console.log(animals[i].name, animals[i].species, animals[i].species);
  }
};

// BONUS:  Sort the array of animals by id.
