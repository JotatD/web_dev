function bmi(weight, height)
{
    return (weight)/(height*height);
}
// var height = prompt("Your height:");
// var weight = prompt("Your weight:");

// console.log("Your bmi is " + bmi(weight, height));

//console.log((18.5 + 24.9)/2);

function isLeapYear(year){
    if (year%400 === 0) return true;
    if (year%100 === 0) return false;
    if (year%4 === 0) return true;
}

// if (isLeapYear(1300)){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


function fb(number){
    if (number%15 == 0) console.log("Fizzbuzz");
    else if (number%3 === 0) console.log("Fizz");
    else if (number%5 === 0) console.log("Buzz");
}

//fb(3);

var names = ["Juan", "Diego", "Guevara", "Lugo"];
function whoIsPaying(names){
    var index = Math.floor(Math.random() * names.length);
    console.log(names[index] + " is paying");
}

//whoIsPaying(names);

function beer() {
    var count = 100;
    while (count-- > 0){
        console.log("There are " + count + " beers on the wall");
    }
    console.log("The beer ran out");
}

//beer();

function fibonacci(n){
    var output = [0, 1];
    if (n === 1){
        output.pop();
    }
    for (var i = 2; i < n; i++){
        output.push(output[i-1] + output[i-2]);
    }
    return output;
}

console.log(fibonacci(3));