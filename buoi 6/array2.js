let numbers=new Array(4,1,7,6,3);
let resault=numbers.find(x=>x>5);
console.log(resault);
let oddArray=numbers.filter(x=>x%2!==0);
console.log(oddArray);
resault=oddArray.map(x=>x=x*2);
console.log(resault);
let sum=resault.reduce((total,x)=>total+x,0);
console.log(sum);