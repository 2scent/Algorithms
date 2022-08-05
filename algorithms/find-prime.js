// O(n)
function isPrimeOne(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// O(루트 n)
function isPrimeTwo(num) {
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// 에라토스테네스의 체
// O(n log log n)
function getPrimes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.flatMap((v, i) => (v ? i : []));
}

console.log(getPrimes(100));
