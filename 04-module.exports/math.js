const sum = (a,b)=> a+b;
const mul = (a,b)=> a*b;
const div = (a,b)=> a/b;
const diff = (a,b)=> a-b;

let obj = {
    sum: sum,
    mul: mul,
    div: div,
    diff: diff
};

module.exports= obj;