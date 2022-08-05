/*5.Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

 function maior(number1,number2){
     if(number1 > number2){
         return `O maior é ${number1}`
     }else {
         return `O maior é ${number2}`
     }
 }

 console.log(maior(10,25))

// const numbers = (number1,number2) => {
//      if(number1 > number2) console.log(`O primeiro é maior`)
//      else console.log(`O segundo é maior`)
//  }
//  numbers(9,15)