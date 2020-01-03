function insertHyphen(str) {
    let strArr = str.split('');
    let numArr = strArr.map(Number);
    let result ="";
    for(var i = 0; i < numArr.length; i++) {
     if((numArr[i+1]!==undefined)&&(numArr[i]%2===0 && numArr[i+1]%2===0)) {
          //numArr.push('-');
          result = result + numArr[i] + "-";
      }else{
          result = result + numArr[i];
      }
    }
    return result;
  }
  console.log(insertHyphen('02456'));


  //////////////////////////////
  console.log("/*******/");
  const num=window.prompt();
  const str = num.toString();
  const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
