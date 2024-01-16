console.log('JS is running');

function filterOutOdds() {
    var nums =  Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  /* Write an ES2015 Version */
  const filterOutOdds2 = (...vals) => vals.filter(val => val % 2 === 0);

  // --------------------------------------
  // FIND MIN:

  const findMin = function(...vals) {       // Rest Operator
        return vals.reduce((val, currVal) => {
            if (currVal < val) {
                return currVal;
            } else {
                return val;
            }
        }, 0        // Set a starting value of 0
) }

const myArray = [44,25,67,945,1055,-144,0,213];

findMin(...myArray)     // Uses spread Operator

  // --------------------------------------
  // MERGE OBJECTS

function mergeObjects(firstObject, secondObject) {
    return { ...firstObject, ...secondObject};
    }
    
  // --------------------------------------
  // DOUBLE AND RETURN ARGS

  function doubleAndReturnArgs(arr, ...rest) {
    const restDoubled = rest.map(function (val) {
        return val * 2;
    });
    return [...arr, ...restDoubled];
  }

  // ---------------------------------------
  /** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const elementToRemove = items[Math.round(Math.random() * (items.length - 0))];
    // console.log(`elementToRemove: ${elementToRemove}`)
    return items.filter((el) => el !== elementToRemove);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];
    

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {return {...obj, [key]: val}
}


/** Return a new object with a key removed. */
const person = {name: 'Ralph', age: 34, height: 6.0};  // testing object

const removeKey = (obj, key) => {
  const newObj = {...obj};
  delete newObj[key];
  return newObj;
  }

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return obj3 = {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj, [key]: val};
    return newObj;
}