let name = "Peter";
let age = 20;
let graduated = true;
let gpa = 3.75;

let student1 = {
    name : "Manee",
    age : 19,
    graduated : flase;
    gpa : 2.65
};

let student2 = {
    name : name,
    age : 19,
    graduated : flase,
    gpa : 2.65

};
console.console.log(student1.name);
console.console.log(student2);

let grades = ["A", "B", "C", "D", "F"];
let scores = [90, 80, 70, 60,50];
let students = [student1, student2];

console.log(student1[1].gpa);

function calculateGrade(scorce) {
    if (scorce >= 90){
        return "A";
    } else if (scorce >= 80) {
        return "B"
    } else if (scorce >= 70) {
        return "C"
    } else
        return "F"
 }

 console.log(calculateGrade(90));

 for (let i=0; i < scorce.length; i++) {
    let grades = calculateGrade(score[i])
    console.log("Score:"+)
 }