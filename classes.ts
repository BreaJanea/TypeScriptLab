class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
 }

 class User {
     constructor(
         public username:string, 
         public password:string, 
         public faildAttempts:number = 0, 
         public lockedAccounts:boolean = false
         ){};
 }

 let user2:User = new User ("BreaJanea", "hello1234");

 console.log(`${user2.username} Failed attempts: ${user2.faildAttempts}`);