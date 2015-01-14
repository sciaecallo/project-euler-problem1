var primeFactor = [];
var findFactors = function(num) {
for(i=2;i<num;i++) {
while(num % i === 0) {
      num = num / i;
      primeFactor.push(i);
  }  
}
};
console.log("The prime factors of 13195 are 5, 7, 13 and 29.");
console.log("PROBLEM: What is the largest prime factor of the number 600851475143 ?");
findFactors(600851475143);
var solution=0;
var largest = function() {
for(i=0;i<primeFactor.length;i++){
  for(y=i+1;y<primeFactor.length;y++){
  if(i>y){
      solution=primeFactor[i];
  }
  else {
      solution=primeFactor[y];
  }
  }  
}
};
largest();
console.log("SOLUTION: the largest prime factor of the number 600851475143 is " + solution);