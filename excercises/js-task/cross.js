let i,j,count;
    let N=prompt("Please enter n value");
    
    count = N * 2 - 1;
for(let i=0;i<N;i++){
for(let j=0;j<N;j++){
if(i==j || (i+j)==(N-1)){
document.write("*");
}else {
document.write("&nbsp;");
}
}
document.write("<br>");
}
