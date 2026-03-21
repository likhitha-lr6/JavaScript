function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Prime Check");
console.log("Input: 7 =>", isPrime(7));
console.log("Input: 10 =>", isPrime(10));