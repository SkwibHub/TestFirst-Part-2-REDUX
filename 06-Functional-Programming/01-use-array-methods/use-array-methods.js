function indexAndValue(array) {
    let indexValue = 0;
    function convertToObject(item) {
        let newObj = {};
        newObj.index = indexValue;
        newObj.value = item;
        indexValue++;
        return newObj;
    }
    let newArray = array.map(convertToObject);
    return newArray;
}

function capitalize(string) {
    return string.toUpperCase();
}

function swapCase(string) {
    let wordArray = string.split(" ");
    let newArray = wordArray.map((word, i) => {
        if (i % 2 === 0) return capitalize(word);
        return word;
      });
    return newArray.join(" ");
}

function extensionSearch(searchValue,array) {
    function searchForExtension(string) {
        extValue = string[string.length - 3] + string[string.length - 2] + string[string.length - 1];
        if (extValue === searchValue) {
            return true;
        }
        return false;
    }
    let newArray = array.filter(searchForExtension);
    return newArray;
}

function getPopulation(arrayofObj, countrySearch) {
    const addPop = (accumulator,element) => {
        if (countrySearch.includes(element.name) || countrySearch.length === 0) {
            return accumulator + element.population;
        }
        return accumulator;
    }
    return arrayofObj.reduce(addPop,0);
}

function keyifyArrayOfObjects(key,array) {
    const getAlias = (accumulator,element) => {
        accumulator[element[key]] = element;
        return accumulator;
    }
    return array.reduce(getAlias,{});
}

function powerLevelAverage(array) {
    const totalPowerLevel = (accumulator, element) => {
        return accumulator + element.powerLevel;
    }
    let total = array.reduce(totalPowerLevel,0);
    return Math.round(total / array.length);
}

function mapReduce(array,funcArg) {
    const usingReduce = (accumulator=[],element) => {
        accumulator.push(funcArg(element));
        return accumulator;
    }
    return array.reduce(usingReduce,[]);
}

function filterReduce(array,funcArg) {
    const usingReduce = (accumulator=[],element) => {
        if (funcArg(element)) {
            accumulator.push(element);
        }
        return accumulator;
    }
    return array.reduce(usingReduce,[]);
}

function inYourBudget(maxPrice,arrayOfObj) {
    const isItLess = (element) => {
        if (maxPrice >= element.price) {
            return true;
        }
    }
    
    const getItem = (element2) => {
        return element2.item;
    }

    return arrayOfObj.filter(isItLess).map(getItem);
}

function separateAndReturnNames (array, arrayObjKey, maxNameLength) {
    return newArray;
}

