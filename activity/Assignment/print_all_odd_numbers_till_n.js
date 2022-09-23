//2. Write a function to print all odd numbers till n

function numOdd(n) {
  for (let i=1; i<n; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}
numOdd(10);
