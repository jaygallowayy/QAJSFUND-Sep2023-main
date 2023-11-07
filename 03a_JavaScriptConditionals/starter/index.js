let age = 50

if (age <= 17) {
    console.log("Underage");
} else if (age > 18 && age <= 65) {
    console.log("Insurable");
} else {
    console.log("out of range");
}

let result =
  age <= 17 ? "Underage" : age > 18 && age <= 65 ? "Insurable" : "Out of range";
console.log(result);




//let grade =
  //  testResult >= 90 ? "You got an A*" : testResult >= 80 ? "You got an A" : testResult >= 70 ? "You got a B" : testResult >= 60 ? "You got a C" : testResult >= 50 ? "You got a D" : "You got an F";
//console.log(grade)

let testResult = prompt("What is your score out of 100?")
let grade;

switch (true) {
    case testResult > 90:
        grade = "You got an A*";
        break;
    case testResult > 80:
        grade = "You got an A";
        break;
    case testResult > 70:
        grade = "You got a B";
        break;
    case testResult > 60:
        grade = "You got a C";
        break;
    case testResult > 50:
        grade = "You got a D";
        break;
    default:
        grade = "You got an F";
}

console.log(grade);




