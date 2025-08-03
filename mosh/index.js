"use strict";
let sales = 1234;
let course = 'TypeScript';
let is_published = true;
// any type
function display(img) {
    console.log(img);
}
//arrays 
let numbers = [1, 2, 3, 4];
//tuples
let user = [1, 'John'];
//enum
const small = 1;
const med = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Med"] = 2] = "Med";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Med;
console.log(mySize);
