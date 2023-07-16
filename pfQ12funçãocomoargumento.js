//função como argumento
const fraizes= (a,b,c,r)=> { 
    const delta = b**2 - 4*a*c
    if (r>0) return ((-1)*b + Math.sqrt(delta))/(2*a)
    else return ((-1)*b - Math.sqrt(delta))/(2*a)
}     
     const exec=(f,a,b,c,r)=>f(a,b,c,r)
     
     const res1=exec(fraizes,1,4,-21,-1)
     const res2=exec(fraizes,1,4,-21,1)
     
     console.log(`As raízes da equação são ${res1} e ${res2}.`)