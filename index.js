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
  
//   1. filter the list of people who were born born in the 1500's 


let century=inventors.filter(inventor => inventor.year>=1500 && inventor.year<=1600)


console.table(century)

// 2 Give us an array of the inventors first and last name 

let  fnln = inventors.map(inventor => `${inventor.first}  ${inventor.last}`)

console.table(fnln)

// 3. Sort the inventors by birthdate from oldest to youngest

let sorted = inventors.sort((a,b)=> a.year - b.year)

console.table(sorted)

// 4. How many years  did all the inventors live 

const live = inventors.reduce((total,inventor)=>{
    console.log(inventor.first)
    return total + (inventor.passed - inventor.year)
},0)

console.log(live)

// 5. Sort inventors by year lived 
const sorted2 = inventors.sort((a,b) => {
   return (b.passed - b.year) - (a.passed - a.year)
})

console.table(sorted2)



// 5. sort the people alphabetically by the last name 


const sorted3 = people.sort((a,b)=>{
    a = a.split(', ')
    b = b.split(', ')
    return a - b
})

console.log(sorted3)