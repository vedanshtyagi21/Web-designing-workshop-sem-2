let student={
    name:"vedansh",
    age: 20,
    course: "B.Tech"
};
let jsonData=JSON.stringify(student);
console.log(jsonData);

for(let key in student){
    console.log(key + ": " + student[key]);
}
let number=[2,3,4,5];
let jsonNumber=JSON.stringify(number);
console.log(jsonNumber);

let jsonString='{"name":"vedansh","age":20,"course":"B.Tech"}';
let studentObj=JSON.parse(jsonString);
console.log(studentObj);

//error
try{
    let x=y+10;
} catch(error){
    console.log("error occurred: " + error.message);
}
``