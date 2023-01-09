
//Preliminaries 
//1
for (i = 0; i <= 9; i++) {
    console.log(i)
}

//2
for (i = 9; i >= 0; i--) {
    console.log(i)
}

//3
//const fruit = ["banana", "orange", "apple", "kiwi"]
//for (i = 0; i < fruit.length; i++) {
//    console.log(fruit[i])
//}

//Bronze
//1
var numArr = []
for (i = 0; i <= 9; i++) {
    numArr.push(i)
}
console.log(numArr)

//2
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
       console.log(i) 
    }
}

//3
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitTwo = []
for (i=0; i < fruit.length; i +=2) {
    fruitTwo.push(fruit[i])
}
console.log(fruitTwo)

//Silver

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

//1
for (i=0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

//2
const nameArr = []
const occupationArr = []
for (i=0; i < peopleArray.length; i++) {
    nameArr.push(peopleArray[i].name)
    occupationArr.push(peopleArray[i].occupation)
}
console.log(nameArr, occupationArr)

//3
const namesArr = []
const occupationsArr = []
for (i=0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        namesArr.push(peopleArray[i].name)
    }
    else {
        occupationsArr.push(peopleArray[i].occupation)
    }
}
console.log(namesArr, occupationsArr)

//Gold
/*
//1 - can't fiqure out how to just log 0's 
var len = 2
const zeroArr = [];

///console.log(zeroArr)

for (var i = 0; i < len; i++) {
    zeroArr[i] = '0'
    for (var j = 0; j < len; j++) {
    zeroArr[j] = '0'
    }
}
console.log(zeroArr[i][j]) 
*/
