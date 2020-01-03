let month_name = function(date){
month_list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return month_list[date.getMonth()];
};
console.log(month_name(new Date("7/11/2009")));
