class Parent{
    constructor(){
        this.fatherName="Sncuhgjer";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }

}


const baby= new Child("Arnold");
console.log(baby);
console.log(baby.getFullName());
console.log(baby.fatherName);
