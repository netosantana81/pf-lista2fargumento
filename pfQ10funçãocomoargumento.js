//função como argumento
const  fcitar = (x,y) => `${y},${x[0]}.`
const a= "Mary"
const b= "Jane"
const exec=(f,x,y)=>f(x,y)
const res1=exec(fcitar,a,b)
console.log(res1)