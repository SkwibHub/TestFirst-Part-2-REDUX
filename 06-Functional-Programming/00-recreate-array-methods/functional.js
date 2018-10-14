function forEach(array,funcArg) {
    for (let i = 0; i < array.length; i++) {
        let newElem = funcArg(array[i]);
        array.splice(i,1,newElem);
    }
}

const doubler = (num) => num * 2;

function map(array,funcArg) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newElem = funcArg(array[i]);
        newArray.push(newElem);
    }
    return newArray;
}

function filter(array,funcArg) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (funcArg(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function includes(item, value) {
    if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
            if (item[i] === value) { return true }
        } 
    } else {
        for (let key in item) {
            if (item[key] === value) { return true }
        }
    }
    return false;
}

function countWords(startValue,string) {
    let wordsArray = string.split(" ");
    return startValue + wordsArray.length;
}

function reduce(array,startValue,funcArg) {
    let sumValue = 0;
    for (let i = 0; i < array.length; i++) {
        sumValue += funcArg(startValue,array[i]);
    }
    return sumValue;
}

function sum(array) {
    return array.reduce((a,b) => a + b )
}

// NEED TO WORK ON....
function every(array,funcArg) {
    if (array === []) { return true }
    console.log(reduce(array,0,funcArg));
    // Reduce is passing the '0' as num to the isEven function
    // return false;
}

/*
function any(array,funcArg) {
    if (array === []) { return true }
    console.log(funcArg(array[2]));
    console.log(reduce(array,1,funcArg));
    // if (reduce(array,0,funcArg) >= array.length ) { return true }
    // return false;
}
*/
