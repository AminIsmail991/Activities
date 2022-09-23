// 10. Write a function to print first n fibonacci numbers. 
//In fibonacci sequence, next number is the sum of previous 2 number. 
// First 2 numbers in sequence are constant.
// 0, 1 is constant in fibonacci sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....

// Fn = Fn-1 + Fn-2
function fibonacci(n) {
    let f1 = 0, f2 = 1, i;

    if (n < 1)
        return;
        console.log(f1 + " ");
        
    for (i = 1; i < n; i++) {
        console.log(f2 + " ");
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}
fibonacci(30);