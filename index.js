const isPrime = (n) => {
  // Check if n is less than 2 
  // Since 2 is smallest prime
  if (n < 2) return false

  // For loop to check for possible factors
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(false)
      return false;
    }
  }
  // Return true if there are no possible factors.
  console.log(true)
  return true;
};


isPrime(2); // -> true

isPrime(3); // -> true

isPrime(4); // -> false

isPrime(5); // -> true

isPrime(6); // -> false

isPrime(7); // -> true

isPrime(8); // -> false

isPrime(25); // -> false

isPrime(31); // -> true

isPrime(2017); // -> true

isPrime(2048); // -> false

isPrime(1); // -> false

isPrime(713); // -> false