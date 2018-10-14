// all of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Read the test specs to see why these functions already defined as a function
// declaration.

function factorialIterative(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result*= i;
    }
    return result;
}

function factorial(number) {
    let result = 1;
    if (number > 1) {
        result = number * factorial(number - 1);
    }
    return result;
}

function sumTheDigits(array, number = array.length - 1) {
    let result = 0;
    if (number > 0) {
        result = array[number] + sumTheDigits(array,number - 1);
    } else {
        result = array[0];
    }
    return result;
}

function countTheVowels(string, number = string.length - 1) {
    let result = 0;

    function isThisVowel(string) {
        if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') { return true }
        return false;
    }

    if (number < 1) {
        if (isThisVowel(string[0])) {
            return 1;
            }
        } else {
            result = countTheVowels(string, number - 1);
            if (isThisVowel(string[number])) {
                result++;
            }
        }
    return result;
}

function recSmallestInt(array, number = array.length - 1, smallest) {
    if (number < 1) {
        return array[0];
    } else {
        let currentSmallest = recSmallestInt(array,number - 1, smallest);
        if (array[number] < currentSmallest) {
            smallest = array[number];
        } else {
            smallest = currentSmallest;
        }
    }
    return smallest;
}

function fib(number,array=[1,1]) {
    if (number < 2) { 
        return 1;
    } else {
        fib(number - 1, array);
        let fibo = array[number - 1] + array[number - 2];
        array.push(fibo);
        return fibo;
    }
}

function stringify() {

}



