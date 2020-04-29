var name1 = 'Brea';
var names = ['Jocob', 'Tiia', 'John'];
outputInCaps(name1);
outputArrayInCaps(names);
function outputInCaps(str) {
    console.log(str.toUpperCase());
}
function outputArrayInCaps(strs) {
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var s = strs_1[_i];
        outputInCaps(s);
    }
}
var num = [1, , 3, 5, 7, 9];
function calcStats(num) {
    var total = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var n = num_1[_i];
        total += n;
    }
    console.log("Total:" + total);
}
