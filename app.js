"use strict";
function getFullName(user) {
    return `${user.firstName} ${user.nickname} ${user.age} y.o.`;
}
const getFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;
const user = {
    firstName: "Vlad",
    nickname: "Kohai",
    age: 17
};
console.log(getFullName(user));
