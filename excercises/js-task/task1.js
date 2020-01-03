let first =  function(fruits, n) {
    if (fruits == null) 
    return void 0;
  if (n == null) 
    return  fruits[0];
    // return  fruits[fruits.length-1];
  if (n < 0)
    return [];
  return fruits.slice(0, n);
  
};
 

console.log(first(['apple','banana','mango','oranges']));
console.log(first(['apple','banana','mango','oranges'],2));

var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last(['apple','banana','mango','oranges']));
 
  console.log(last(['apple','banana','mango','oranges'],2));
 
