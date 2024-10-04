function productOfOddIntegers(M, N) {
    if (M > N) {
        return "M is greater than N. Invalid input.";
    }

    let product = 1;
    let hasOdd = false;

    for (let i = M; i <= N; i++) {
        if (i % 2 !== 0) {
            product *= i;
            hasOdd = true;
        }
    }

    return hasOdd ? product : "No odd numbers in the range.";
}

// Example usage:
console.log(productOfOddIntegers(3, 9));  // Output: 945 (3 * 5 * 7 * 9)
console.log(productOfOddIntegers(10, 15));  // Output: 10395 (11 * 13 * 15)
console.log(productOfOddIntegers(10, 9));  // Output: "M is greater than N. Invalid input."
