let bonus=10;

function sum(first,second){
    let result=first+second+bonus;
    var result=first+second+bonus;
    return result;
}

//let const maintain scopes.
//var use korle scopes maintain kore na.access kora jabe.scope take uporer level e niye jai(whistling)

const output=sum(3,7);
console.log(output);
console.log(bonus);