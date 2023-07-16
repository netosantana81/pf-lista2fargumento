//função como argumento
const xor= (x,y)=> {
    return (x || y) && !(x && y)
}
const exec=(f,x,y)=>f(x,y)
const res1=exec(xor,false,true)
console.log(res1)
