function convertToRoman(num) {
  let checkRegex = /[0-9]/g;
  let numToArray = JSON.stringify(num).match(checkRegex);
  let finalArray = "";

  let obj1To9 = {
    1 : 'I', 2 : 'II', 3: 'III', 4: 'IV', 
    5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 
    9: 'IX' };

  let key1To9 = Object.keys(obj1To9);
  let value1To9 = Object.values(obj1To9);

  let obj10To90 = {
  1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 
  5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 
  9: 'XC'
  };

  let key10To90 = Object.keys(obj10To90);
  let value10To90 = Object.values(obj10To90);

  let obj100To900 = {
    1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 
    5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 
    9: 'CM'
  };

  let key100To900 = Object.keys(obj100To900);
  let value100To900 = Object.values(obj100To900);

  let obj1000To4000 = {
    1: 'M', 2: 'MM', 3: 'MMM'
    };

  let key1000To4000 = Object.keys(obj1000To4000);
  let value1000To4000 = Object.values(obj1000To4000);

  if (numToArray.length == 4) {
    for (let key in key1000To4000) {
      if (key1000To4000[key] == numToArray[0]) {
        finalArray += value1000To4000[key];
      }
    }
    for (let key in key100To900) {
      if (key100To900[key] == numToArray[1]) {
        finalArray += value100To900[key];
      }
    }
    for (let key in key10To90) {
      if (key10To90[key] == numToArray[2]) {
        finalArray += value10To90[key];
      }
    }
    for (let key in key1To9) {
      if (key1To9[key] == numToArray[3]) {
        finalArray += value1To9[key];
      }
    }

  } else if (numToArray.length == 3) {

        for (let key in key100To900) {
      if (key100To900[key] == numToArray[0]) {
        finalArray += value100To900[key];
      }
    }
    for (let key in key10To90) {
      if (key10To90[key] == numToArray[1]) {
        finalArray += value10To90[key];
      }
    }
    for (let key in key1To9) {
      if (key1To9[key] == numToArray[2]) {
        finalArray += value1To9[key];
      }
    }

  } else if (numToArray.length == 2) {

    for (let key in key10To90) {
      if (key10To90[key] == numToArray[0]) {
        finalArray += value10To90[key];
      }
    }
    for (let key in key1To9) {
      if (key1To9[key] == numToArray[1]) {
        finalArray += value1To9[key];
      }
    }

  } else if (numToArray.length == 1) {
    for (let key in key1To9) {
      if (key1To9[key] == numToArray[0]) {
        finalArray += value1To9[key];
      }
    }

  } else {
    return false;
  }

  return finalArray;
}

console.log(convertToRoman(3999));