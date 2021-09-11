const ages=[2,5,9,7,5];
const ages2=[4,7,87,6,2,5];
//const allages=ages.concat(ages2).concat([5]).concat([5]);
const allages=[...ages,...ages2,10];
console.log(allages);


const array=[150,256,458];
const maximum=Math.max(...array);
console.log(maximum);
