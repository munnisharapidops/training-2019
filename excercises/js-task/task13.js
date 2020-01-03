string_chop =  function(str, size){
      if (str == null) 
      return [];
      str = String(str);
      size = ~~size;  // ~~ fastest trimming operator
      return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('rapidops'));
console.log(string_chop('Rapidops',2));
console.log(string_chop('Rapidops',3));
