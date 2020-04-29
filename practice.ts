let name1:string = 'Brea';
let names:string[] = ['Jocob', 'Tiia', 'John'];

outputInCaps(name1);
outputArrayInCaps(names);

function outputInCaps (str:string):void{
    console.log(str.toUpperCase());
}

function outputArrayInCaps (strs:string[]):void {
    for(let s of strs) {
        outputInCaps(s);
    }
}

let num:number[] = [1, ,3, 5, 7, 9]

function calcStats(num:number[]) {
    let total:number = 0;

    for (let n of num) {
        total += n;
    }
   console.log (`Total:${total}`)

}