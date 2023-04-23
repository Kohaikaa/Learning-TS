function getFullName(user) {
    return "".concat(user.firstName, " ").concat(user.nickname, " ").concat(user.age, " y.o.");
}
var getFullNameArrow = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
var user = {
    firstName: "Vlad",
    nickname: "Kohai",
    age: 17
};
console.log(getFullName(user));
