function isPrime(num) {
    var flag = 0;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log("Its prime")
    }
    else {
        console.log("Its not prime")
    }
}