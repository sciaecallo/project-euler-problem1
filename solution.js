console.log("Find the sum of all the multiples of 3 or 5 below 1000.");
var sum = 0;
for(i = 0; i < 1001; i++) {
    if(i % 3 === 0) {
    sum += i;
    }
    else if(i % 5 === 0) {
    sum += i;
    }
    }   
console.log("The sum of all the multiples of 3 and 5 below 1000 is " + sum);