const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');


// Interpolated
console.log('Hello I am a %s string!', '💩')

// Styled
console.log('%c I am some great text',
    'font-size: 40px; background-color:red; color: green; text-shadow: 10px 10px 0 gray;')

// warning!
console.warn('OH NOOOOO');

// Error :|
console.error('error');

// Info
console.info('I love sushi');

// Testing
console.assert(1 === 2, 'That is wrong!') // работает только если первое выражение ложно


// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`); //or groopCollapsed

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);

    console.groupEnd(`${dog.name}`);
})


// counting

console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('Wes');
console.count('Wes');


// timing

console.time('fetching data');
fetch('https://api.github.com/users/mar-bdv')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data)
})

console.table(dogs)