const hubby="Elias Kanchon";
//hubby="Omar Sunny";
console.log(hubby);



function add(num1,num2=20){
    return num1+num2;
}

console.log(add(15));

//template
const firstName="Justin";
const lastName="TimberLake";
const a=10;
const b=20;
//const fullName = firstName + " " + lastName + " is a good boy";

const fullName=`${firstName} ${a+b} is a good boy.`

console.log(fullName);

const multiline=`Hello there
I am Dipesh Shome
i am from aust`

console.log(multiline);
