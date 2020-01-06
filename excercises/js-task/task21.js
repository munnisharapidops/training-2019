let object={
    0:[1,2,3,4],
    1:[6,7,8,9],
    2:[0,10,11,15],
    3:[0,0,33,50] ,
};

let result = Object.keys(object).reduce(function (r, k) {
    return (r.concat(Number(k), object[k])) ;
}, []);

let array_list=[... new Set(result)];


console.log(array_list);
