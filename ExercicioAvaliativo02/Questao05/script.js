function calculo() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let number3 = parseFloat(document.getElementById('number3').value);

    let resultado = number1 + number2 + number3;
    let difinicao = (resultado % 2 === 0) ? 'par' : 'impar';
    alert("A soma dos números foi " + resultado + " ele é " + difinicao);
}