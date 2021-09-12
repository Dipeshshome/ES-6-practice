const nums=[1,2,3,4,5,6,9,8];

const part=nums.slice(2,5); //start,end

console.log(part);

console.log(nums);


const removed=nums.splice(2,5);//start,delete-count
console.log(removed);
console.log(nums);


const inject=nums.splice(2,3,47,85,5);//start,delete-count,push items
console.log(inject);
console.log(nums);


const join=nums.join(" ");
console.log(join);