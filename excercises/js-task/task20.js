let array=[
    {
        name:'jasmine',
        age:20,
        hobbies:['cooking','music','travelling'],
    },
    {
        name:'sunny',
        age:25,
        hobbies:['music'],
    },
    {
        name:'mona',
        age:40,
        hobbies:['drawing','travelling'],
    },
    {
        name:'soha',
        age:10,
        hobbies:['playing','music'],
    },
    {
        name:'sankar',
        age:22,
        hobbies:['guitar','cooking'],
    },

];

let hobbieslist=[];
let output={};
array.forEach(hobbies1 => {
    hobbieslist= [...hobbieslist,...hobbies1.hobbies];
    hobbieslist= [...new Set(hobbieslist)];
});


for (let hobby of hobbieslist){
   // console.log(hobby);
     let hobbyname = array.filter(val => val.hobbies.includes(hobby)).map((check_name => check_name.name));
    output[hobby] = hobbyname;
}

console.log(output);





