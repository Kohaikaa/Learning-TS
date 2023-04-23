function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
const getFullNameArrow = (firstName: string, lastName: string): string =>
    `${firstName} ${lastName}`;


let a: number = 25;
let b: number = 44;
let myName: string = "Vlad";
let isMale: boolean = true;
let sum: number = a + b;
console.log(`${myName} (is male: ${isMale}): ${a} + ${b} = ${sum}`);