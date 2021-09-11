const studnets = [
    {id:21,name:'Omar Sunny'},
    {id:22,name:'Moyuri'},
    {id:23,name:'Manna'},
    {id:24,name:'Dipjol'}
]


const output=[];

for(let i =0;i<studnets.length;i++){
    const element=studnets[i].name;
    output.push(element);
}

console.log(output);

const bigger=studnets.filter(s=>s.id>40);
const biggerOne=studnets.find(s=>s.id>40)

const names=studnets.map(s=>s.name);
console.log(names);