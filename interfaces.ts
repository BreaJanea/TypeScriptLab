
//defining the user objective type (like a c# class)
interface user {
    username:string;
    password:string;
    failedLogins:number;
    accountLocked:boolean;
}

//instantiatin an instance
let user1:user = {
    username: "BreaJanea",
    password: "hello1234",
    failedLogins: 0,
    accountLocked: false
}

//function that takes a user as an argument
let checkStatus = function(u:user): void{ 
console.log (`${user1.username} Account Locked? ${user1.accountLocked}`)
}

checkStatus(user1);