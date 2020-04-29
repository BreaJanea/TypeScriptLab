//instantiatin an instance
var user1 = {
    username: "BreaJanea",
    password: "hello1234",
    failedLogins: 0,
    accountLocked: false
};
//function that takes a user as an argument
var checkStatus = function (u) {
    console.log(user1.username + " Account Locked? " + user1.accountLocked);
};
checkStatus(user1);
