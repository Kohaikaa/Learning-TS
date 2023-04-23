"use strict";
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const getFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;
let a = 25;
let b = 44;
let myName = "Vlad";
let isMale = true;
let sum = a + b;
console.log(`${myName} (is male: ${isMale}): ${a} + ${b} = ${sum}`);
