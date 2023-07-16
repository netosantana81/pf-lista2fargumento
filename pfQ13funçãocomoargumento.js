//função como argumento
//essa deu certo

const velocidade = (t,x,t0=0,x0=0) => (x-x0)/(t-t0)
const ta = 0
const xa = 500 
const tb = 30
const xb = 2000

const exec=(f,t,x,t0=0,x0=0)=>f(t,x,t0=0,x0=0)

const res1=exec(velocidade,tb,xb)

console.log(res1)