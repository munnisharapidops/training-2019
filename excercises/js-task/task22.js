const arr=[1,[2,3,null,4],[null],5,[1,2,3,3,undefined,null,' ',9,0,[3,4,5,6,7,[0,9,2,3]]]];
function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };

let array=flatDeep(arr, Infinity) ;
console.log(array);
let myArray = array.filter(function (el) {
    return el != null && el != "" && el != undefined && el != ' ';
  });
  let result=[... new Set(myArray)];
