// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age2 = 200;
// console.log(age, age2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team)


// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

team2[2] = 'fjskdjfds';


// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'fkldklfdk'

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person;


// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2)

// We will hopefully soon see the object ...spread
const cap3 = {...person};
console.log(cap3)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = { // 1 level
    name: 'Wes',
    age: 590,
    social: { // 2 level
        twitter: '3434',
        facebook: 533,
        instagram: { // 3 level
            kdgjkfd: 'fgdgd',
            jdskf: 6453
        }
    }
}

const dev = Object.assign({}, wes)

const dev2 = JSON.parse(JSON.stringify(wes)); //not recommended but working