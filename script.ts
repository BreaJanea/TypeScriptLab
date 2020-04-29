const greeter = (person: string) => `Hello ${person}`;
​
const greeter1 = function greeter (person: string):string {
    return `Hello ${person}`; //comment1
}
​
/*comment2*/
function greeter2(person:string):string {
    return `Hello ${person}`;
}
​
function greeter3(person:string):void {
    console.log(`Hello ${person}`);
}
​
const user = 'name1';
​
console.log(greeter(user));