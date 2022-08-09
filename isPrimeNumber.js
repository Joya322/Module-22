function isPrime(number) {
    let isPrimeAns = 1;
    if (number == 1) {
        return "1 is not a prime number!"
    }
    for (let i = 2; i < number; i++){
        if (number % i == 0) {
            isPrimeAns = 0;
            break;
        }
        else {
            continue;
        }
    }

    if (isPrimeAns == 1) {
        return true;
    }
    else {
        return false;
    }
}

let number = 13;
let isPrimeNumber = isPrime(number);
console.log(isPrimeNumber);