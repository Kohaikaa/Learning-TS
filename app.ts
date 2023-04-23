function getFullName(user: {
    firstName: string,
    nickname: string,
    age: number
}): string {
    return `${user.firstName} ${user.nickname} ${user.age} y.o.`;
}

const getFullNameArrow = (firstName: string, lastName: string): string =>
    `${firstName} ${lastName}`;


const user = {
    firstName: "Vlad",
    nickname: "Kohai",
    age: 17
};

console.log(getFullName(user));