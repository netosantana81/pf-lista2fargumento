//função como argumento
const multiplicar= (b,h)=> b*h

const exec=(f,b,h)=>f(b,h)

const arearetangulo=exec(multiplicar,2,4)
console.log(arearetangulo)