//função como argumento
const circuferencia=(raio,pi=3.14)=> pi*raio*raio


const exec=(f,raio,pi)=>f(raio,pi)


const area=exec(circuferencia,5)

console.log(area)