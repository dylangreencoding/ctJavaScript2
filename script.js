`use strict`;

// #1 check for matched names - function assumes capitalization for names

const dogString = `Hello Max, my name is Dog, and I have purple eyes!`;
const dogNames = [`Max`, `HAS`, `PuRple`, `dog`];

function findWords(dogString, dogNames) {
  let matched = false;
  for(let i = 0; i < dogNames.length; i++) {
    dogNames[i] = dogNames[i].toLowerCase();
    dogNames[i] = dogNames[i].charAt(0).toUpperCase() + dogNames[i].slice(1);
    if(dogString.includes(dogNames[i])) {
      matched = true;
      console.log(`Matched ${dogNames[i]}`);
    };
  };
  if(matched === false) {
    console.log("No Matched Names");
  };
};

findWords(dogString, dogNames);

// #2 replace even indexes - created new array & changed original in place, returned both

const in_arr = [`Max`, `Baseball`, `Reboot`, `Goku`, `Trucks`, `Rodger`];

function replaceEvens(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
      newArr.push(`Even Index`);
      arr[i] = 'EvenIndex';
    } else {
      newArr.push(arr[i]);
    };
  };
  return [newArr, arr];
};

console.log(replaceEvens(in_arr));