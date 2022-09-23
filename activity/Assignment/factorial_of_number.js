//9. Write a function to print the factorial of number n. If n = 5, then factorial of 5 is 5 * 4 * 3 * 2 * 1. 
//If n = 10, the factorial of 10 is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

function findFactorial(n){
    let factorial = 1;
    if(n < 0){
        return factorial = "Invalid Number !"
    }
    else if (n == 0 || n == 1){
      return factorial;
    }
    else{
      for(let i = n; i >= 1; i--){
        factorial = factorial * i;
      }
      return factorial;
    }  
  }
  console.log('Factorial of number 5 : ' + findFactorial(5));
  console.log('Factorial of number 10 : ' +findFactorial(10));



  ///

  function findF(n) {
    let factorial = 1;
    for(let i = n; i >= 1; i--){
        factorial = factorial * i;
      }
      return factorial;
  }
  console.log('Factorial of number 5 : ' + findF(5));
  
