//FizzBuzz - muito usado em entrevistas de emprego
//Lembra do "python para idiotas" com esse exercicio? -- Mesma lógica...

//Divisivel por 3 print 'Fizz"
//Divisivel por 5 print 'Buzz"
//Divisivel por 3 e 5 print 'FizzBuzz"
// Se não for nummero tem que avisar "Não é um número"
//Se não for divisivel nem por 3 nem por 5 print a propria entrada

let resultado = (fizzBuzz("A"));
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof (entrada) != "number"){    
    return "Não é um número"
    }
    if (entrada % entrada == 0) {
      var perThree = true;
      return (cKDiv (entrada))        
    } 
    function cKDiv (entrada){
      if (entrada % 3 == 0) {
        var perThree = true;
      }
      if (entrada % 5 == 0) {
        var perFive = true
      }
      if (perFive && perThree == true) {
        var checkAnd = true;
        }   
      return (rtResults(perThree, perFive, checkAnd, entrada))
    }
    function rtResults(perThree, perFive, checkAnd, entrada) {
       if (checkAnd == true) {
        return 'FizzBuzz'
       }
       if (perThree == true) {      
        return 'Fizz';
       }
      if (perFive == true) {
        return 'Buzz';
      }
       else {
        return entrada;
      }
    }
}