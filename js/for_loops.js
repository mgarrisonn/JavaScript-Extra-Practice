"use strict";

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + "x" + i + "=" + (number * i));
    }
}
showMultiplicationTable(10);
showMultiplicationTable(9);
showMultiplicationTable(8);


function evenOrOdd(number) {
    return(number % 2 === 0) ? number + " is an even number" : number + " is an odd number";
}

for (var j = 0; j < 10; j++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    console.log(evenOrOdd(randomNumber));
}


for(var k = 1; k <= 9; k++) {
    var output = "";
    for (var l = 1; l <= k; l++) {
        output += k;
    }
    console.log(output);
}


for(var m = 100; m >= 5; m -= 5) {
    console.log(m);
}

