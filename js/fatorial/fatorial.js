/** Valdeir PSR */

const fatorialA = (n) => n===0 ? 1 : n * fatorialA(n-1)

const fatorialB = (num) => {
    let result = 1;

    for (let i = num; i > 0; i--) {
        result *= i;
    };

    return result;
}


function fatorialC(valor) {
      // para valores negativos
      if(valor<0) {

        return 'Valor deve ser maior ou igual a zero';
      
        // para valor = 0  ou igual a 1
      } else if ( (valor == 0) || (valor == 1) ) {

        return 1;
       
      } else {

        var acumula = 1;
        for(x=valor;x>1;x--) {
          acumula = acumula * x;
        }
        return acumula;
      }
  }
