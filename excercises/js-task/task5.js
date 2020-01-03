console.log("/****union of 2 arrays***/")
function union(arra1, arra2) {
  
  if ((arra1 == null) || (arra2==null)) 
    return 0;
  
  let obj = {};
 
  for (let i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
 
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
 
  let res = [];
 
  for (let n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
console.log("union array");
console.log( union([1, 2, 3], [100, 2, 1, 10]));


/////////////////////////////////////////////
console.log("/****difference between 2 arrays");
function arrayDiff (array1, array2) {
    let temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (let i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    
    console.log(arrayDiff([1, 2, 3], [100, 2, 1, 10]));
