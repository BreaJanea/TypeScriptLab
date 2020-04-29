var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    return Student;
}());
var User = /** @class */ (function () {
    function User(username, password, faildAttempts, lockedAccounts) {
        if (faildAttempts === void 0) { faildAttempts = 0; }
        if (lockedAccounts === void 0) { lockedAccounts = false; }
        this.username = username;
        this.password = password;
        this.faildAttempts = faildAttempts;
        this.lockedAccounts = lockedAccounts;
    }
    ;
    return User;
}());
var user2 = new User("BreaJanea", "hello1234");
console.log(user2.username + " Failed attempts: " + user2.faildAttempts);
