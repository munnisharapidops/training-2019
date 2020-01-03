let arr1=['sunny','jasmine','sunny','sunny','sunny'];
let frequent_item = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (frequent_item<m)
                {
                    frequent_item=m; 
                  item = arr1[i];
                }
        }
        m=0;
}

console.log(`${item} ( ${frequent_item} times ) `) ;
