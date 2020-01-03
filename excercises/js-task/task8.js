function find_diff(d1,d2){
let date1 = new Date(d1); 
  let date2 = new Date(d2); 
  
// To calculate the time difference of two dates 
let Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
console.log("Total number of days between dates:"+ "  "+
               + Difference_In_Days); 
            }
            
find_diff("07/11/2019","10/02/2019")
