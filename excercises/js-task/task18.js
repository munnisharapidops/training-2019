let obj=[
    {
        id:1,
        name:'honey',
        age:12,
    },
    {
        id:2,
        name:'soha',
        age:36,
    },
    {
        id:3,
        name:'sunny',
        age:22,
    },
    {
        id:4,
        name:'jasmine',
        age:19,
    },
    {
        id:5,
        name:'janu',
        age:15,
    },
    {
        id:6,
        name:'sankar',
        age:25,
    },
    {
        id:7,
        name:'rosy',
        age:2,
    },
    {
        id:8,
        name:'sana',
        age:40,
    },
    {
        id:9,
        name:'aisu',
        age:10,
    },
    {
        id:10,
        name:'sajan',
        age:73,
    },

];

obj.sort(function (a,b){
    return a.age-b.age;
})
console.log(obj);
console.log("/***sort names***/");
function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison * -1;  ///* -1 return in descending order
  }
  
  console.log(obj.sort(compare));
