/**
 * To check how efficient our code is ,we use time and sapce complexity
 * Time complexity is measure in O(n) which not time taken to complete , but 
 * how long the number of operation took to complete the task
 * 
 */

// O(1)
// here we are doing one operation i.e n+n which is constant time even for huge numbers
// if n+n+n+n then it becomes 4*1 ,which is constant O(1)
function addn(n){
    return n + n
}
console.log(addn(488833))


//O(n)
// it loops through n times for each input so its BigO will be proportional to its input (n)
// if we add another loop parallet to it , it become O(n+n) = O(2n) => remove the constant => O(n)

function loop(n){
    for (let index = 0; index < n; index++) {
        console.log(index)
        
    }
    for(let j=0 ; j <n;j++){
        console.log(j)
    }
}
console.log(loop(5))

//O(n^2)
// here n = 5 , so we are using loop with in loop so the output has 25 items , so BigO => O(n^2) => n*n
// if we add the parallel loop then O(n^2+n) =>  only dominant BigO will be there and neglect rest 
// so Big0 is O(n^2)
function loopWithin(n){
    for (let index = 0; index < n; index++) {
      for (let j = 0; j < n; j++) {
        console.log(index,j);
      }
    }
    for(let k=0;k < n ;k++){
        console.log(k)
    }
}
console.log(loopWithin(5))

// here we have three nested loops and which is represented as n*n*n
// so Bigo is O(n^3) =>  even if cube or fourth or fifth it well always be O(n^2)
function loopthree(n) {
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(index,j,k);
      }
    }
  }
  
}
console.log(loopthree(5));

//log(n)
// This method is called divide and conquer , it should be a sorted list
// we split into half and again we split until we find the result
// find 8 in an array arr=[1,2,3,4,6,7,8]
// linear search will be  O(n) check all elements and find the result
// here on logn we split into half and middle element is greater or lesser than 8
// so here right half of the array we take and find middle until we find the result - 8
// log2 8 = 3 i.e it will take 3 operator to find the value we looking in an arr length of 8

// different terms of input
// where inputs are a and b not n
// any one of these inputs are not equal to n

function differentTermsInput(a,b){
  // BigO is not O(n+n) =>  O(2n) => O(n)
  // Bigo is O(a+b) => a&b !== n
  // a may be 1 and b may be million
  for(let i=0; i < a; i++){
    console.log(i)
  }
  for (let j = 0; j < b; i++) {
    console.log(j);
  }

  // nested for loop 
  // BigO will be O(a*b)
  for (let i = 0; i < a; i++) {
    
    for (let j = 0; j < b; i++) {
      console.log(i,j);
    }
  }
  

}
