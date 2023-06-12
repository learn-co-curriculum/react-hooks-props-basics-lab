// OBJECT DESTRUCTURING REVIEW ////////////////////////////////////////////////////////////////

// Key Qs: 
// 1. What tools does JS give us to access and manipulate objects and their properties?
// 2. How can we use object destructuring to share objects and properties between
//    React components?

// Here's a user object:
const user = {
    first_name: "Benedict",
    last_name: "Cumberbatch",
    email: "benny@gmail.com",
    date_created: "2016-06-04",
}

// Object destructuring allows us to "unpack" objects and save their values in variables.

// Let's save each property to a variable to refer to it later:
// const first_name = user.first_name
// const last_name = user.last_name


// Object destructuring lets us do the same thing, all at once! Neat.
const { first_name, last_name, email, date_created } = user // <-- We assign the variables 
// ^                    ^                                          to the desired object.
// Declaration.         Here, each variable matches a property name.

// We can pass a destructured object as parameters in a function.
// React creates a props object that we can access in this way for cleaner code.

function welcomeEmail({ first_name, last_name, email, date_created }) {
    return (
        `sendto: ${email} | date: ${date_created}
        Hello, ${first_name} ${last_name}! 
        Thank you for joining our app.`
    )
}

// console.log(welcomeEmail(user))

// Advanced Note:
// There's a whole lot more you can do with object and array destructuring! More info at MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

console.log(`first_name: ${first_name}`)
console.log(`last_name: ${last_name}`)
console.log(`email: ${email}`)
console.log(`date_created: ${date_created}`)


// YOUR TURN //////////////////////////////////////////////////////////////////////////////////

// 1. Everyone find a partner.
// 2. Build a simple object below.
// 2. Destructure your partner's object and pass it into a function that uses each property as a variable.


const raccoon = {
    name: "Bob",
    weight: 40,
    color: "green",
    age: 2
}


// const { name, weight, color, age } = raccoon


function introduceRaccoon({ name, weight, color, age }) {
    return `This is ${name}. They are ${weight} pounds, ${age} years old, and have a beautiful ${color} coat of fur.`
}

console.log(introduceRaccoon(raccoon))