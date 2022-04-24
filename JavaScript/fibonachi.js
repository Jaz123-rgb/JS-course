

let num = 0;

const matrix = new Array(10).fill("")
                    .map(()=>new Array(10)
                               .fill(0)
                         .map(()=> new Array(10)
                                     .fill(0)
                                            .map(()=>num++)));
console.log(matrix)
console.log(matrix[1])

//Factoriales 
const factorial = (n, a=1) => Array(n).fill("basura")
                      .map(()=> a++)
                      .reduce((ac, number) => ac*number,1);

console.log(factorial(5))

//Fibonacci 
const fibo = (n, a=1, c=1) =>  new Array(n).fill('jaz apesta').reduce((ac)=>{
  const temp = a;
      a = c;
      c = temp + a;
      ac.push(a);
      return ac; 
}, [0]);
console.log(fibo(10));
