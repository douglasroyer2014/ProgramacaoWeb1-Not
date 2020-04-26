var resultado = "";

function factorial( _n )
{
    var _p = 1 ;
    while( _n > 0 ) { _p *= _n-- ; }
    return _p ;
}

function capturar() {
    var capturando = "";
    capturando = document.getElementById('numero').value;
    this.resultado = factorial(capturando);
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById('valorDigitado').innerHTML = this.resultado;
    event.preventDefault();
}

