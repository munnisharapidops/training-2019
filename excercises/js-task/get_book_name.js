const books = [
    {
        name:'book1',
        publishedYear: 2000,
        author: 1
    },
    {
        name:'book2',
        publishedYear: 1995,
        author: 2
    },
    {
        name:'book3',
        publishedYear: 2012,
        author: 1
    },
    {
        name:'book4',
        publishedYear: 1995,
        author: 3
    },
    {
        name:'book5',
        publishedYear: 2010,
        author: 2
    }
]

const authors = [
    {
        id: 1,
        name: 'jhon'
    },
    {
        id: 2,
        name: 'david'
    },
    {
        id: 3,
        name: 'crystal'
    }
]


let searchName=function(name){
    const book_name=[];
    authors.forEach(function(authors){
       if(name === authors.name){
            book_name.push( authors.name + " " +"written books are:");
            for (let book_authors of books){
                  if(book_authors.author === authors.id ){
                      book_name.push(book_authors.name);
                     book_name.push("published in :" + book_authors.publishedYear);
                    }
            }
        }
    })
    return book_name;
}

let res = searchName('crystal');
console.log(res);

console.log("//////////////////////////////////////");

let findYear=function(d1,d2){
   let final_arr=[];
    for(let publish_year of books){
        if(publish_year.publishedYear <= d2 && publish_year.publishedYear >= d1){
            final_arr.push("book name:"+publish_year.name);
            final_arr.push("publish year:"+publish_year.publishedYear)
            for(let author_name of authors){
                if(publish_year.author==author_name.id){
                    
                    final_arr.push("author name:" + author_name.name);
                }
            }
        }
    }
    return final_arr;
}

let res1 = findYear("1995","2000");
console.log(res1);
